import "../add-todo/AddTodo.css";
import { ui } from "@/components/ui/";
import { useEffect, useState } from "react";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useGetTodoById } from "@/hooks/useGetTodoById";
import { useModalStore } from "@/store/useModalStore";
import ReactDOM from "react-dom";

export default function UpdateTodo({ id }: { id: string }) {
  const { isUpdateModal, setIsUpdateModal } = useModalStore();
  const { data, isLoading } = useGetTodoById(id);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setCompleted(data.completed);
    }
  }, [data]);

  if (!isUpdateModal) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <article className="modal-header">
          <h2>Update Todo</h2>
          <button onClick={() => setIsUpdateModal(false)}>
            <img height={20} width={20} src="/close.svg" alt="close" />
          </button>
        </article>

        {isLoading ? (
          <ui.Spinner />
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!id) return;
              updateTodo.mutate({ id, title, completed });
              setIsUpdateModal(false);
            }}
          >
            <div className="form-group">
              <ui.Label className="mt-10 mb-2" id="title">
                Title
              </ui.Label>
              <ui.Input
                id="title"
                placeholder="Enter todo title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <ui.Label className="mt-5 mb-2" id="completed">
                Completed
              </ui.Label>
              <select
                className="select"
                value={completed ? "true" : "false"}
                onChange={(e) => setCompleted(e.target.value === "true")}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <ui.Button className="w-full mt-5" type="submit">
              Update Todo
            </ui.Button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
