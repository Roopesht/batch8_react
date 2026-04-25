import  { useState } from "react";
function Timer(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Timer: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Start Timer</button>
        </div>
    )
}

export default Timer;