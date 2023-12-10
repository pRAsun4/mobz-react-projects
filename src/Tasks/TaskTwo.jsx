import { useState } from "react"


export default function TasksTwo() {

    const [counter, setCounter] = useState(0);

    const handleIncrease = () =>{
        setCounter(counter + 1);
    }
    const handleDecrease = () =>{
        setCounter(counter - 1);
    }

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center', }}>
                <h1>TASKS 2</h1>
                <div style={{ display: 'flex', gap: '5rem' }}>
                    <div style={{display:'flex', gap:'5rem'}}>
                        <button onClick={handleIncrease}>INCREASE</button>
                        <p> value : {counter}</p>
                        <button onClick={handleDecrease}>DECREASE</button>
                    </div>
                    
                </div>
            </div>

        </>
    )
}