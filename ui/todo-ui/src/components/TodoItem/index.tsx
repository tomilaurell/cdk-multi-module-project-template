import React from "react";
import styled from "styled-components";

export const TodoItemContainer = styled.div`
  background-color: grey;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  height: 40px;
  border-bottom: solid 2px #2b2b2b;
`;

type TodoItemProps = {
  title: string;
};

const TodoItem: React.FC<TodoItemProps> = ({ title }: TodoItemProps) => {
  return <TodoItemContainer>{title}</TodoItemContainer>;
};

export default TodoItem;
