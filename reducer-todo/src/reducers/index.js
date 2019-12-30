export const initialState = {
  todos: [
    {
      task: "Organize Garage",
      id: 1528817077286,
      completed: false
    },
    {
      task: "Bake Cookies",
      id: 1528817084358,
      completed: true
    }
  ],
  todo: "",
  searchBox: "",
  hideCompleted: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, todo: action.value };
    case "SUBMIT":
      return { ...state, todos: [...state.todos, action.payload], todo: "" };
    case "COMPLETED":
      return {
        ...state,
        todos: [...state.todos, (state.todos[action.index] = action.payload)]
      };

    default:
      return state;
  }
};
