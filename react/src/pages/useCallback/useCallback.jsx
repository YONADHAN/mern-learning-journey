import React, {useCallback, useState} from 'react';


const Child = React.memo(({handleClick})=>{
    console.log("child rendered")
    return (
        <div>
            <button onClick={()=>handleClick()}>Click Me</button>
        </div>
    )
})



const UseCallback = () => {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        console.log("Parent triggered by the child click")
    },[])
    return (
        <div>

            <div>Count: {count}</div>
            <button onClick={()=> setCount(Prev => Prev+1)}>Increase the Count</button>
            <Child handleClick={handleClick}/>
        </div>
    )
}

export default UseCallback;