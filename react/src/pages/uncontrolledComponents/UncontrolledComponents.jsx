
import TopicFrame from "../../components/TopicFrame"
const UncontrolledComponents = () => {
  const code = `
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
`;
  return (
    <div>
      <h1>UnControlled Components</h1>
      <p>Uncontrolled components are components that manage their own state internally, rather than relying on the parent component to pass down state and update it. In React, uncontrolled components typically use refs to access the DOM elements and retrieve their values when needed.</p>
      <TopicFrame
        name="Example of UnControlled Component"
        description="In this example, we have an uncontrolled form component that uses a ref to access the input value when the form is submitted."
        code={code} />
    </div>
  )
}

export default UncontrolledComponents