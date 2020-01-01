import React, { useReducer } from "react";

import { initialState, reducer } from "./reducers";
import "./App.scss";
import Tabs from "./components/Tabs";
import List from "./components/List";
import TodoForm from "./components/TodoForm";

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
      payload: [
        {
          task: todo.task,
          id: todo.id,
          completed: !todo.completed
        }
      ]
    });
  };

  console.log(state);

  return (
    <div className="App">
      <h1>React ToDo List using useReducer</h1>
      <TodoForm
        {...state}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <Tabs {...state} dispatch={dispatch} />
      <List {...state} handleChecked={handleChecked} />
    </div>
  );
}

export default App;
