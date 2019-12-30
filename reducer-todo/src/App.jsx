import React, { useReducer } from "react";

import { initialState, reducer } from "./reducers";
import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch({
      type: "SUBMIT",
      payload: {
        task: state.todo,
        id: new Date(),
        completed: false
      }
    });
  };

  const handleChecked = (index, todo) => {
    console.log("hljh", index, todo);
    dispatch({
      type: "COMPLETED",
      index,
      payload: {
        task: todo.task,
        id: todo.id,
        completed: !todo.completed
      }
    });
  };

  console.log(state);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.todo}
          onChange={handleChange}
          placeholder="Write activity here..."
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {state.todos.map((todo, index) => {
          return (
            <li key={index}>
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
        })}
      </ul>
    </div>
  );
}

export default App;
