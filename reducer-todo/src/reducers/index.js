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
      // map over the todos list which creates new list and
      // replaced old object with new updated payload changing
      // completed state.
      // Here, arr2.find(o => o.id === obj.id) will return the
      // element i.e. object from arr2 if the id is found in
      // the arr2. If not, then the same element in arr1 i.e.
      // obj is returned.
      const filteredTodos = [...state.todos].map(
        todo => action.payload.find(o => o.id === todo.id) || todo
      );
      console.log("FILTERED LIST", filteredTodos);
      return {
        ...state,
        todos: [...filteredTodos]
      };

    default:
      return state;
  }
};
