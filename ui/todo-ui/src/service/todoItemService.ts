export interface Todo {
  title: string;
}

export async function fetchTodoItems(): Promise<Todo[]> {
  return [
    {
      title: "Eka item"
    },
    {
      title: "Toka item"
    }
  ];
}
