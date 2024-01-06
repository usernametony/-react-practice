import { useRef,useState } from "react"
const Reffer=()=>{
    const uname=useRef('null');
    const upwd=useRef('null');
    const [res,setRes]=useState('');
    const login=()=>{
       uname.current.value=='Excelr' && upwd.current.value=='excel@123' ? setRes('Login Success') : setRes('Login Failed');
    }

    return(
        <>
            <input type="text" ref={uname} /><br /><br />
            <input type="password" ref={upwd} /><br /><br />
            <button onClick={login} >Login</button><br /><br />
            <h1> {res} </h1>

        </>
    )
}
export default Reffer;