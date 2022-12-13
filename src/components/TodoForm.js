import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
    style={{display:props.isEdit ? 'none' : 'flex'}}
      className="todo-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (input.trim()) {
          props.handleSubmit({
            id: new Date().getTime(),
            text: input.trim(),
            isCompleted: false,
          });
          setInput("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Add a todo..."
        name="text"
        value={input}
        className="todo-input"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button" disabled={!input.trim()}>
        新增
      </button>
    </form>
  );
}

export default TodoForm;
