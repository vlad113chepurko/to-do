import "./DashBoard.css";
import type { Todo } from "@/types/Todo.type";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { useGetAllTodos } from "@/hooks/useGetAllTodos";
import { useModalStore } from "@/store/useModalStore";
import { useQuery } from "@tanstack/react-query";
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
      <h1>Welcome to Your Dashboard</h1>
      {isLoading ? (
        <Spinner className="size-8"/>
      ) : data.length > 0 ? (
        <ul>
          {data.map((todo: Todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span>{todo.title}</span>
              <span>{todo.completed ? "Completed" : "Pending"}</span>
              <DropMenu />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <p>No todos available. Please add some tasks!</p>
          <Button onClick={() => setModal(true)} variant="secondary">
            Add Todo
          </Button>
        </div>
      )}
    </div>
  );
}
