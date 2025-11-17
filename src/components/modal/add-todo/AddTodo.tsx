import "./AddTodo.css";
import { Input } from "../../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../../ui/button";
import { useAddTodo } from "@/hooks/useAddTodo";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useModalStore } from "@/store/useModalStore";

export default function AddTodo() {
  const [title, setTitle] = useState<string>("");
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
                mutate({ title: title });
              }}
            >
              <div className="form-group">
                <Label id="title">Title</Label>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  id="title"
                  placeholder="Enter todo title"
                />
              </div>
              <Button className="w-full mt-5" type="submit">
                Add Todo
              </Button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
