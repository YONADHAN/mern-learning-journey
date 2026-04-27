import TopicFrame from "../../components/TopicFrame";

import ParentReactMemo from "./Parent";
const ExplanationReactMemo = () => {

  const code = `
import React from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <div>Count: {count}</div>;
});

export default Child;


// Parent Component
import React, { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <Child count={count} />

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
`;

  return (
    <div>
      <h1>React.memo Explanation</h1>

      <p>
        React.memo is a higher-order component in React that prevents unnecessary
        re-renders of functional components. It works by doing a shallow comparison
        of props and only re-rendering the component if the props change.
      </p>

      <TopicFrame
        name="Example of React.memo"
        description="In this example, the Child component will only re-render when the 'count' prop changes. Updating the input field will not trigger a re-render of the Child component."
        code={code}
      />
      <div style={{padding:"10px", paddingBottom:"20px", backgroundColor:"#f0f0f0", borderRadius:"8px"}}>
       
      <h2>Parent Component</h2>
      <p>This is the parent component that uses React.memo:</p>
        <ParentReactMemo />
      </div>
    </div>
  );
};

export default ExplanationReactMemo;