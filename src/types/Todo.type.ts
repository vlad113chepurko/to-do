export interface Todo {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  description?: string;
  createdAt: string;
  updatedAt: string;
}

