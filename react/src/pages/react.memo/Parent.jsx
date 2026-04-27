import React, { useState } from "react";
import Child from "./Child";

function ParentReactMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <Child count={count} />

      <button style={{padding:"2px", backgroundColor:"lightgreen", textDecorationColor:"white"}} onClick={() => setCount(count + 1)}>Increase</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default ParentReactMemo;