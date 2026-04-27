import {useState, useMemo} from 'react';

function ExpensiveComponentUseMemo() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");


    const expensiveCalculation = (num) => {
        console.log("Doing expensive computation...")
        for(let i = 0;i<1000000;i++) {

        }
        return num*2;
    }


    const result = useMemo(()=>{
        return expensiveCalculation(count)
    },[count])


    return (
        <div>
            <span>Result: {result}</span>
            <button onClick={()=> setCount(Prev => Prev+1)}>Increase</button>
        
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        </div>
    )
}

export default ExpensiveComponentUseMemo;