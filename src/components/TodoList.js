import React, { useState } from "react";

function TodoList(props) {
  const [editInput, setEditInput] = useState("");
  const [editObj, setEditObj] = useState({});
  const todoBoxesStyle = {
    display: props.isEdit ? "none" : "block",
  };
  const todoAreaStyle = {
    display: props.isEdit ? "flex" : "none",
  };
  const handleComplete = (id) => {
    props.setTodos(
      props.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };
  const handleEdit = (todo) => {
    props.setIsEdit(true);
    setEditObj(todo);
    setEditInput(todo.text);
  };
  const handleEditComplete = (e) => {
    e.preventDefault();
    if (editInput.trim()) {
      props.setTodos(
        props.todos.map((todo) => {
          if (todo.id === editObj.id) {
            return { ...todo, text: editInput };
          }
          return todo;
        })
      );
      props.setIsEdit(false);
      setEditInput("");
      setEditObj({});
    }
  };
  const handleEditInputChange = (e) => {
    setEditInput(e.target.value);
  };
  return (
    <div>
      <form style={todoAreaStyle} className="todo-editarea">
        <input type="text" onChange={handleEditInputChange} value={editInput} />
        <button type="submit" onClick={handleEditComplete} disabled={!editInput.trim()}>
          完成
        </button>
      </form>
      <div style={todoBoxesStyle} className="todo-boxes">
        {props.todos.map((todo, index) => (
          <div
            id={todo.id}
            className={
              todo.isCompleted ? "todo-box todo-box--completed" : "todo-box"
            }
            key={index}
          >
            <div className="todo-content">{todo.text}</div>
            <div className="todo-buttons">
              <button
                className="todo-complete"
                onClick={(e) => {
                  e.preventDefault();
                  handleComplete(todo.id);
                }}
              >
                {todo.isCompleted ? "未完成" : "完成"}
              </button>
              <button
                className="todo-edit"
                onClick={() => {
                  handleEdit(todo);
                }}
              >
                編輯
              </button>
              <button
                className="todo-delete"
                onClick={() => {
                  props.handleDelete(todo.id);
                }}
              >
                刪除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
