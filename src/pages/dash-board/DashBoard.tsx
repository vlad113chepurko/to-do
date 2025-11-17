import "./DashBoard.css";
import type { Todo } from "@/types/Todo.type";
import { ui } from "@/components/ui/";
import { useGetAllTodos } from "@/hooks/useGetAllTodos";
import { useModalStore } from "@/store/useModalStore";
import { useQuery } from "@tanstack/react-query";
import AddTodo from "@/components/modal/add-todo/AddTodo";
import UpdateTodo from "@/components/modal/update-todo/UpdateTodo";
import DropMenu from "@/components/drop-menu/DropMenu";

export default function DashBoard() {
  const { fetchTodos } = useGetAllTodos();
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  const { setModal, isModal } = useModalStore();

  console.log(isModal);

  return (
    <div className="dashboard">
      <AddTodo />
      <h1>Welcome to Your Dashboard</h1>
      {isLoading ? (
        <ui.Spinner className="size-8" />
      ) : data.length > 0 ? (
        <ul>
          {data.map((todo: Todo) => (
            <li key={todo.id}>
              <UpdateTodo id={todo.id} />
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <span>{todo.completed ? "Completed" : "Pending"}</span>
              <DropMenu id={todo.id} />
            </li>
          ))}
          <ui.Button onClick={() => setModal(true)} variant="secondary">
            Add Todo
          </ui.Button>
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <p>No todos available. Please add some tasks!</p>
          <ui.Button onClick={() => setModal(true)} variant="secondary">
            Add Todo
          </ui.Button>
        </div>
      )}
    </div>
  );
}
