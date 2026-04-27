
import CodeBlock from '../../components/CodeBlock'
const ExplanationUseContext = () => {
    return (
        <div>
            <h1>UseContext</h1>
            <h2>useContext is a React hook that lets you access data from a global context without passing props through every level.</h2>
            <h3 style={{ color: "red" }}>Problem</h3>
            <h4>Without Context</h4>
            <CodeBlock code={`<App>
  <Parent>
    <Child>
      <GrandChild />  // needs data
    </Child>
  </Parent>
</App>`} />

            <p> You pass props through every level → messy and hard to maintain</p>
            <h2>Solution</h2>
            <h3>Step 1: Create Context</h3>
            <CodeBlock code={`import { createContext } from "react";

export const UserContext = createContext();`} />
            <h3>Step 2: Provide Value</h3>
            <CodeBlock code={`import React from "react";
import { UserContext } from "./UserContext";
import Child from "./Child";

function App() {
  const user = "Yonadhan";

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

export default App;`} />
            <h2>Step 3: Consume with useContext</h2>
            <CodeBlock code={`import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default GrandChild;`} />



        </div>
    )
}

export default ExplanationUseContext