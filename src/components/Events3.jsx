import { useState } from "react";
const Events3=()=>{
    const[str,setStr]=useState('');
    const fun_one=(param1,param2)=>{
        param1==`Excelr` && param2==`Excelr@123` ?setStr(`Login Success`) : setStr(`Login failed`);

    }
    return(
        <>
            <h1> {str} </h1>
            <button onDoubleClick={()=>fun_one(`Excelr`,`Excelr@123`)} >Button 3</button>
        </>
    )

}
export default Events3;