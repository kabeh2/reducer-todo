import React from "react";

function List({ handleChecked, ...state }) {
  let pendingList = state.todos.filter(todo => {
    return !todo.completed;
  });
  let completedList = state.todos.filter(todo => {
    return todo.completed;
  });

  const renderedList = (state.currentTab === "Completed"
    ? completedList
    : state.currentTab === "Pending"
    ? pendingList
    : state.todos
  ).map((todo, index) => {
    return (
      <li key={todo.id}>
        <label>
          <input
            type="checkbox"
            name="check"
            id="check"
            defaultChecked={todo.completed}
            onChange={() => handleChecked(index, todo)}
          />
          {todo.task}
        </label>
      </li>
    );
  });

  return <ul>{renderedList}</ul>;
}

export default List;
