import React from 'react'
import TopicFrame from '../../components/TopicFrame';
const ExplanationSibilingCommunication = () => {
    const code = `import React, { useState } from "react";

const ChildA = ({ sendData }) => {
  return (
    <button onClick={() => sendData("Hello from Child A")}>
      Send Data
    </button>
  );
};

const ChildB = ({ message }) => {
  return <h2>{message}</h2>;
};

function Parent() {
  const [data, setData] = useState("");

  return (
    <div>
      <ChildA sendData={setData} />
      <ChildB message={data} />
    </div>
  );
}

export default Parent;`
    return (
        <div>
            <h1>Sibiling Communication</h1>
            <h2>Correct Approach</h2>
            <p>Correct Approach (Lift State Up)
                </p>
                <ul>          
                    
                    <li>Step 1: Store state in Parent</li>
                    <li>Step 2: Pass setter to ChildA</li>
                    <li>Step 3: Pass value to ChildB</li>
                </ul>
            <TopicFrame
                name="sibiling communication"
                description={"Two components at the same level (same parent) need to share data."}
                code={code}
            />
        </div>
    )
}

export default ExplanationSibilingCommunication