import axios from "axios";
import { useEffect,useState } from "react";
const GetEx1=()=>{
    const [res,setRes]=useState([]);
    useEffect(()=>{
        axios.get('https://www.w3schools.com/angular/custmers.php').then((posRes)=>{
            const {data}=posRes;
            const {records}=data;
            setRes(records);

        },(err)=>{
            console.log(err);
        })
    },[]);
    return(
        <>
            <table border={10} align='center'  cellSpacing={10} cellPadding={10} >
                <thead>
                    <tr>Name</tr>
                    <tr>City</tr>
                    <tr>Country</tr>
                </thead>
                <tbody>
                    {
                        res.map((element,index)=>{
                            return(
                                <>
                                    <tr key={index} >
                                        <td>{element.Name} </td>
                                        <td>{element.City} </td>
                                        <td>{element.Country} </td>

                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )

}
export default GetEx1;