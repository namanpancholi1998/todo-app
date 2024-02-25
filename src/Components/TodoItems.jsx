import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { FaRegCheckCircle } from "react-icons/fa";
export default function TodoItems({ todo, toggleCompleted, deleteTodo }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={todo.isCompleted ? { textDecoration: "line-through" } : {}}>
        {todo.value}
      </div>
      <div className="todoActions" style={{ display: "flex", gap: "20px" }}>
        <span onClick={() => toggleCompleted(todo.id)}>
          <FaRegCheckCircle />
        </span>
        <span onClick={() => deleteTodo(todo.id)}>
          <GiCrossMark />
        </span>
      </div>
    </div>
  );
}
