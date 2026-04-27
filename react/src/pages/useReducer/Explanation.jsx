import React from "react";
import TopicFrame from "../../components/TopicFrame";

const ExplanationUseReducer = () => {
  const code = `import React, { useReducer } from "react";

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
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;`;

  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      
      {/* Title */}
      <h1 style={{ color: "#2c3e50" }}>useReducer Hook</h1>

      {/* Definition */}
      <h3>What is useReducer?</h3>
      <p>
        useReducer is a React hook used to manage complex state logic by 
        centralizing state updates inside a reducer function.
      </p>

      {/* Syntax */}
      <h3>Syntax</h3>
      <pre style={styles.codeBlock}>
{`const [state, dispatch] = useReducer(reducer, initialState);

state    → current state
dispatch → function to send actions
reducer  → decides how state changes`}
      </pre>

      {/* Code Example */}
      <TopicFrame
        name="useReducer Example"
        description="Simple counter using useReducer to handle increment and decrement actions"
        code={code}
      />

      {/* Mental Model */}
      <h3 style={{ marginTop: "20px" }}>Mental Model</h3>
      <pre style={styles.codeBlock}>
{`dispatch → reducer → new state → re-render`}
      </pre>

      {/* Step-by-step */}
      <h3>Step-by-Step Flow</h3>
      <ol>
        <li>Initial state is set → count = 0</li>
        <li>User clicks "+" button</li>
        <li>{"dispatch({ type: 'INCREMENT' }) is called"}</li>
        <li>Reducer receives state and action</li>
        <li>Returns updated state</li>
        <li>Component re-renders with new value</li>
      </ol>

      {/* Key Insight */}
      <h3>Key Insight</h3>
      <p>
        You are not directly updating state. Instead, you send an action and 
        the reducer decides how to update the state.
      </p>

      {/* Comparison */}
      <h3>Why useReducer?</h3>
      <pre style={styles.codeBlock}>
{`// useState
setCount(count + 1); // logic scattered

// useReducer
dispatch({ type: "INCREMENT" }); // centralized logic`}
      </pre>

      {/* Conclusion */}
      <h3>Conclusion</h3>
      <p>
        useReducer is powerful for managing complex or related state updates 
        in a clean and predictable way, especially in larger applications.
      </p>

    </div>
  );
};

const styles = {
  codeBlock: {
    background: "#1e1e1e",
    color: "#00ffcc",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
    fontSize: "14px",
  },
};

export default ExplanationUseReducer;