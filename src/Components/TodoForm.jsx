import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (input === "") {
      return alert("Please enter some value");
    }

    const todo = {
      value: input,
      isCompleted: false,
      id: uuidv4(),
    };

    addTodo(todo);
    setInput("");
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Your Todo"
        />
        <button onClick={(e) => handleAdd(e)} type="submit">
          Add
        </button>
      </form>
    </>
  );
}
