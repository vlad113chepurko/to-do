import "./Form.css";
import { Outlet } from "react-router-dom";
export default function Form() {
  return (
    <form className="form">
      <div className="form__container">
        <Outlet />
      </div>
    </form>
  );
}
