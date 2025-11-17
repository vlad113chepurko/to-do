import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useFilterStatus } from "@/store/useFilterStatus";

export function SelectFilter() {
  const { setFilterStatus } = useFilterStatus();
  return (
    <Select
      onValueChange={(value: "all" | "todo" | "in-progress" | "done") =>
        setFilterStatus(value)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="todo">To-do</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
