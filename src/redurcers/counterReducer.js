const reducer = (state, action) => {
  //   console.log(action);

  if (action === "SIFIRLA")
    return {
      count: 0,
    };

  if (action === "ARTIR") return { count: state.count + 1 };

  if (action === "AZALT") return { count: state.count - 1 };
};

export default reducer;
