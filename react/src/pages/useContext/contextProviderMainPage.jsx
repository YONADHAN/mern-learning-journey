import React from "react";
import { UserContext } from "./contextCreatingPage";
import GrandChild from "./contextUsingInnerChildPage";

function App() {
  const user = "Yonadhan";

  return (
    <UserContext.Provider value={user}>
      <GrandChild />
    </UserContext.Provider>
  );
}

export default App;