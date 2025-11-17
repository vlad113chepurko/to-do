import "./DashBoard.css";
import type { Todo } from "@/types/Todo.type";
import { SelectFilter } from "@/components/select-filter/SelectFilter";
import { ui } from "@/components/ui/";
import { useGetAllTodos } from "@/hooks/useGetAllTodos";
import { useModalStore } from "@/store/useModalStore";
import { useQuery } from "@tanstack/react-query";
import AddTodo from "@/components/modal/add-todo/AddTodo";
import UpdateTodo from "@/components/modal/update-todo/UpdateTodo";
import DropMenu from "@/components/drop-menu/DropMenu";
import { useFilterStatus } from "@/store/useFilterStatus";

export default function DashBoard() {
  const { filterStatus } = useFilterStatus();

  const { fetchTodos } = useGetAllTodos();
  const { data = [], isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const { setModal } = useModalStore();
  const filteredTodos = data.filter((todo: Todo) =>
    filterStatus === "all" ? true : todo.status === filterStatus
  );

  return (
    <div className="dashboard">
      <AddTodo />
      <h1>Welcome to Your Dashboard</h1>

      {isLoading ? (
        <ui.Spinner className="size-8" />
      ) : filteredTodos.length > 0 ? (
        <ul>
          <SelectFilter />

          {filteredTodos.map((todo: Todo) => (
            <li key={todo.id}>
              <UpdateTodo />

              <input
                type="checkbox"
                checked={todo.status === "done"}
                readOnly
              />

              <span>{todo.title}</span>
              <span>{todo.description}</span>
              <span>{todo.status}</span>

              <DropMenu id={todo.id} />
            </li>
          ))}

          <ui.Button onClick={() => setModal(true)} variant="secondary">
            Add Todo
          </ui.Button>
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <SelectFilter />

          <p>No todos available for this filter.</p>

          <ui.Button onClick={() => setModal(true)} variant="secondary">
            Add Todo
          </ui.Button>
        </div>
      )}
    </div>
  );
}
