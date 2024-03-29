// Başlangıç değeri
export const initialState = {
  todos: [],
  isDark: true,
};

//reducer fonsiyonu

const reducer = (state, action) => {
  //action tipine göre return edilen veriyi belirliyoruz
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, isDark: !state.isDark };

    case "CREATE":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "CLEAR":
      return { ...state, todos: [] };

    case "DELETE":
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtered };

    default:
      return state;
  }
};

export default reducer;
