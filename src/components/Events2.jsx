import { useState } from "react";

const Events2=()=>{
    const[num,setNum]=useState(0);
    const onIncrement=()=>{
        setNum(num=>num+1);
    }
    const onDecrement=()=>{
        setNum(num=>num-1);
    }
    return(
        <>
            <h1>{num}</h1>
            <button onClick={onIncrement} >Increment</button>
            <button onClick={onDecrement} >Decrement</button>
        </>
    )
}

export default Events2;