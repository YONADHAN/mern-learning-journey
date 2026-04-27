import React, { useState } from "react";

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

export default Parent;