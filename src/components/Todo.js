import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [isEdit, setIsEdit] = useState(false);
  const [todos, setTodos] = useState([]);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="todo-wrapper">
      <h1 className="todo-maintitle">Todo-List</h1>
      <TodoForm
        isEdit={isEdit}
        handleSubmit={(todo) => {
          setTodos([todo, ...todos]);
        }}
      />
      <TodoList
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setTodos={setTodos}
        handleDelete={deleteTodo}
        todos={todos}
      />
    </div>
  );
}

export default Todo;
