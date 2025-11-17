import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRemoveTodo } from "@/hooks/useRemoveTodo";
import { useModalStore } from "@/store/useModalStore";

export default function DropMenu({ id }: { id: string }) {
  const { setIsUpdateModal, setSelectedTodoId } = useModalStore();
  const removeTodoMutation = useRemoveTodo();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img height={25} width={25} src="/menu.svg" alt="menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Todo config</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setSelectedTodoId(id);
            setIsUpdateModal(true);
          }}
        >
          Update
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-red-400"
          onClick={() => {
            removeTodoMutation.mutate(id);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
