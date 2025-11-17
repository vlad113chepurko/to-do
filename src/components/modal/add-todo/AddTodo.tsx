import "./AddTodo.css";
import { ui } from "@/components/ui/";
import { useAddTodo } from "@/hooks/useAddTodo";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useModalStore } from "@/store/useModalStore";

export default function AddTodo() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("todo");
  const { isModal, setModal } = useModalStore();
  const { mutate } = useAddTodo();
  if (!isModal) return null;
  return (
    <div>
      {ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal-content">
            <article className="modal-header">
              <h2>Add New Todo</h2>
              <button onClick={() => setModal(false)}>
                <img height={20} width={20} src="/close.svg" alt="close" />
              </button>
            </article>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate({
                  title: title,
                  description: description,
                  status: status,
                });
              }}
            >
              <div className="form-group mb-5">
                <ui.Label className="mb-2" id="title">
                  Title
                </ui.Label>
                <ui.Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  id="title"
                  placeholder="Enter todo title"
                />
              </div>

              <div className="form-group">
                <ui.Label className="mb-2" id="description">
                  Description
                </ui.Label>
                <ui.Textarea
                  maxLength={20}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  id="description"
                  placeholder="Enter todo description"
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
                Add Todo
              </ui.Button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
