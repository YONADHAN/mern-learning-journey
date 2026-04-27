import React from 'react'
import TopicFrame from '../../components/TopicFrame'

const ExplanationUseCallback = () => {

    const code = `import React,{ useState } from "react";

const Child = ({ handleClick }) => {
    console.log("child rendered");
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

const UseCallbackWithout = () => {
    const [count, setCount] = useState(0);
    console.log("parent rendered");

    const handleClick = () => {
        console.log("Child triggered the Parent function");
    };

    return (
        <div>
            <span>Count : {count}</span>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increase Count
            </button>
            <Child handleClick={handleClick} />
        </div>
    );
};

export default UseCallbackWithout;
`;

    const correctCode = `import React, { useCallback, useState } from 'react';

const Child = React.memo(({ handleClick }) => {
    console.log("child rendered");
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
});

const UseCallback = () => {
    const [count, setCount] = useState(0);
    console.log("parent rendered");

    const handleClick = useCallback(() => {
        console.log("Parent triggered by the child click");
    }, []);

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increase the Count
            </button>
            <Child handleClick={handleClick} />
        </div>
    );
};

export default UseCallback;
`;

    return (
        <div>
            <h1>Use of useCallback hook</h1>

            <h3>What is useCallback hook?</h3>
            <p>
                useCallback is a React hook that memoizes a function, meaning it returns 
                the same function reference unless dependencies change.
            </p>

            {/* WITHOUT */}
            <h2 style={{ paddingTop: "7px", color: "red" }}>
                Situation Without useCallback hook
            </h2>

            <p>
                Problem:
                When the parent state updates (like count changes), the parent re-renders.
                On every re-render, the handleClick function is recreated.
                This causes the child component to re-render unnecessarily because the function reference changes.
            </p>

            <TopicFrame
                name="Without useCallback hook"
                description="When count updates → parent re-renders → new handleClick is created → child re-renders due to new function reference"
                code={code}
            />

            {/* WITH */}
            <h2 style={{ paddingTop: "7px", color: "green" }}>
                With useCallback hook
            </h2>

            <p>
                Now:
                useCallback memoizes the function, so its reference stays the same across renders.
                When used with React.memo, the child component will not re-render unless its props actually change.
            </p>

            <TopicFrame
                name="With useCallback hook"
                description="When count updates → parent re-renders → handleClick reference stays same → React.memo prevents child re-render"
                code={correctCode}
            />
        </div>
    );
};

export default ExplanationUseCallback;