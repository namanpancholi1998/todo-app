import React from "react";
import TodoItems from "./TodoItems";

export default function TodoDisplay({ todoList, toggleCompleted, deleteTodo }) {
  return (
    <>
      {todoList.map((todo) => {
        return (
          <TodoItems
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </>
  );
}
