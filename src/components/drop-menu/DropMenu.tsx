import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img height={25} width={25} src="/menu.svg" alt="menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Todo config</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Update</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
