import React from "react";

const ChildReactMemo = React.memo(({ count }) => {
  console.log("Child rendered");
  return <div>Count: {count}</div>;
});

export default ChildReactMemo;