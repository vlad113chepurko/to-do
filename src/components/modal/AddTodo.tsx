import "./AddTodo.css";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import ReactDOM from "react-dom";
import { useModalStore } from "@/store/useModalStore";

export default function AddTodo() {
  const { isModal } = useModalStore();
  if (!isModal) return null;
  return (
    <div>
      {ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Add New Todo</h2>
            <form>
              <div className="form-group">
                <Label id="title">Title</Label>
                <Input id="title" placeholder="Enter todo title" />
              </div>
              <div className="form-group">
                <Label id="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter todo description"
                />
              </div>
              <Button type="submit">Add Todo</Button>
            </form>
          </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
      )}
    </div>
  );
}
