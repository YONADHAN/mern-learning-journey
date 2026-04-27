import ExpensiveComponentUseMemo from "./useMemo"
import TopicFrame from "../../components/TopicFrame"
const ExplonationUseMemo = () => {
    const code = `
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
    `
  return (
    <div>
        <h1>useMemo Explanation</h1>
        <p>
        useMemo is a React hook that allows you to memoize the result of a function so that it only recomputes when its dependencies change. This can be useful for optimizing performance, especially when dealing with expensive computations or complex data transformations.
        </p>
        <TopicFrame
        name="Example of useMemo"
        description="In this example, we have an ExpensiveComponentUseMemo component that performs an expensive calculation based on the 'count' state. By using useMemo, we ensure that the expensive calculation is only performed when 'count' changes, and not when 'text' changes."
        code={code}
      />
      <div style={{padding:"10px", paddingBottom:"20px", backgroundColor:"#f0f0f0", borderRadius:"8px"}}>
       
      <h2>Expensive Component</h2>
      <p>This is the component that demonstrates the use of useMemo:</p>
        <ExpensiveComponentUseMemo />
      </div>
    </div>

  )
}

export default ExplonationUseMemo;