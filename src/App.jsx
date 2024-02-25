import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoDisplay from "./Components/TodoDisplay";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    setTodoList([...todoList, todo]);
  }

  function toggleCompleted(todoId) {
    const updatedTodo = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodo);
  }

  function deleteTodo(todoId) {
    const updatedTodo = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodoList(updatedTodo);
  }

  return (
    <>
      <h1>To DO List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoDisplay
        todoList={todoList}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
