import "../add-todo/AddTodo.css";
import { ui } from "@/components/ui/";
import { useEffect, useState } from "react";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useGetTodoById } from "@/hooks/useGetTodoById";
import { useModalStore } from "@/store/useModalStore";
import ReactDOM from "react-dom";

export default function UpdateTodo() {
  const { isUpdateModal, setIsUpdateModal, selectedTodoId } = useModalStore();
  const { data, isLoading } = useGetTodoById(selectedTodoId);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("todo");
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setStatus(data.status);
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
              if (!selectedTodoId) return;
              updateTodo.mutate({
                id: selectedTodoId,
                title,
                description,
                status,
              });
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
              <ui.Label className="mt-10 mb-2" id="description">
                Description
              </ui.Label>
              <ui.Textarea
                maxLength={20}
                id="description"
                placeholder="Enter todo description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <ui.Label className="mt-5 mb-2" id="completed">
                Completed
              </ui.Label>
              <select
                className="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
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
