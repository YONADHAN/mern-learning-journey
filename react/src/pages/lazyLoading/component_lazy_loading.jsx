import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./MyComponent"));

function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;