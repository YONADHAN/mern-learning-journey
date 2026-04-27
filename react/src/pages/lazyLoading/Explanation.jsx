import React from 'react'
import TopicFrame from '../../components/TopicFrame'

const ExplanationLazyLoading = () => {
    const componentCode = `import React, { Suspense } from "react";

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

export default App;`
    const routeCode = `import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`
    return (
        <div>
            <h1>Lazy Loading & Suspence</h1>
            <p>Lazy loading means loading components or resources only when they are needed, instead of loading everything at once.</p>
            <p>  Goal:</p>
            <ul>
                <li>Improve Performance</li>
                <li>Reduce initial load time</li>
            </ul>
            <h2>Lazy loading in components</h2>
            <TopicFrame
                name="Lazy Loading in Components"
                description='React provides react.lazy() to load components dynamically and Suspense to show fallback UI while loading'
                code={ componentCode}
            />
            <h2>Lazy loading in routes</h2>
            <TopicFrame 
                name={"Route-Based Lazy Loading"}
                description={"Only loads page when user visits it"}
                code={routeCode}
            />
            <h3>Benefits</h3>
            <ul>
                <li>Faster initial load</li>
                <li>Better Performance</li>
                <li>Reduced Bundle Size</li>
                <li>Improved  user performance</li>
            </ul>
        </div>
    )
}

export default ExplanationLazyLoading