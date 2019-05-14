import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PageHeader from "../../components/PageHeader";
import TodoItem from "../../components/TodoItem";
import { fetchTodoItems, Todo } from "../../service/todoItemService";

export const MainContainer = styled.div`
  background-color: black;
  height: 100vh;
  widht: 100vw;
`;

export const TodoListContainer = styled.div``;

const TodoListPage: React.FC = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  useEffect(() => {
    (async () => {
      const items = await fetchTodoItems();
      setTodoItems(items);
    })();
  }, []);

  return (
    <MainContainer>
      <PageHeader title="Todo List" />
      <TodoListContainer>
        {todoItems.map(todoItem => (
          <TodoItem {...todoItem} />
        ))}
      </TodoListContainer>
    </MainContainer>
  );
};

export default TodoListPage;
