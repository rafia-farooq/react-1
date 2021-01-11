import app from './App.module.css';
import {useContext, useState} from "react";
import { ThemeContext } from './App';

export default function CounterHooks({initialCount, increase, decrease}){

    const[count, setCount] = useState(initialCount)
    const bgColor = useContext(ThemeContext)

    return(
        <>
            <div className={app.col}>
                <button style={bgColor} onClick={()=>setCount(count + increase)}>+</button>
                <span>{count}</span>
                <button style={bgColor} onClick={()=>setCount(count - decrease)}>-</button>
            </div>
        </>
    )
}