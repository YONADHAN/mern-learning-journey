import React,{ useState,useCallback } from "react";


const Child = ({handleClick}) => {
    console.log("child rendered")
    return (
        <div>
            <button onClick={()=>handleClick()}>Click Me</button>
        </div>
    )
  
}



const UseCallbackWithout = () => {
    const [count, setCount] = useState(0)
    console.log("parent rendered")
    const handleClick = () => {
        console.log("Child triggered the Parent function")
    }
    return (
        <div>
            <span>Count : {count}</span>
            <button onClick={()=>setCount(prev => prev+1)}>Increase Count</button>
            <Child handleClick={handleClick}/>
        </div>
    )
}


export default UseCallbackWithout;

