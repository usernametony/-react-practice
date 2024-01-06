import axios from "axios";
import { useRef,useState } from "react";
const PosEx1=()=>{
    const ref1=useRef(null);
    const ref2=useRef(null);
    const api_call=()=>{
        axios.post('',{'email':ref1.current.value,'password':ref2.current.value}).then(())
    }
    return(
        <>
            <input type="email" ref={ref1} placeholder="email" />
            <input type="password" ref={ref2} placeholder="password" />
            <button onClick={api_call} >Click</button>
        </>
    )
}
export default PosEx1;