import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </div>
  );
}

export default Counter;