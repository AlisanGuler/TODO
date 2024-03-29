import { useReducer } from "react";
import counterReducer from "../redurcers/counterReducer";

const initialState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="d-flex align-items-center gap-4">
      <button onClick={() => dispatch("SIFIRLA")} className="btn btn-secondary">
        Sıfırla
      </button>

      <button onClick={() => dispatch("AZALT")} className="btn btn-primary">
        Azalt
      </button>

      <span className="lead fs-1">{state.count}</span>

      <button onClick={() => dispatch("ARTIR")} className="btn btn-danger">
        Artır
      </button>
    </div>
  );
};

export default Counter;
