import React, { useReducer } from "react";
import todoReducer, { initialState } from "../redurcers/todoReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // console.log(state)

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    const newTodo = {
      id: new Date().getTime(),
      title: text,
    };

    //veriyi reducer'daki state'e kaydet
    dispatch({ type: "CREATE", payload: newTodo });

    e.target.reset();
  };

  return (
    <div
      className={`
    ${state.isDark ? "bg-black" : "bg-primary"}
    vw-100 vh-100 p-5`}
    >
      <h1
        className={`
      ${state.isDark ? "text-info" : "text-black"}
      text-info mb-5 text-center`}
      >
        ToDo Reducer
      </h1>
      <div className="d-flex justify-content-end ">
        <button
          style={{ padding: "10px 20px", fontSize: 17 }}
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
          className="btn btn-outline-light"
        >
          Mod Değiştir
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="shadow d-flex justify-content-between gap-2 my-4"
      >
        <input className="form-control" type="text" />
        <button type="submit" className="btn btn-success shadow">
          Gönder
        </button>
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          type="button"
          className="btn btn-secondary shadow"
        >
          Temizle
        </button>
      </form>

      <ul className="list-group my-5 shadow">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span> {item.title}</span>

            <button
              onClick={() => dispatch({ type: "DELETE", payload: item.id })}
              className="btn btn-danger"
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
