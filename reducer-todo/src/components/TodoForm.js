import React from "react";

function TodoForm({ handleSubmit, handleChange, ...state }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={state.todo}
        onChange={handleChange}
        placeholder="Write activity here..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
