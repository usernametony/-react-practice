import { Link ,Outlet} from "react-router-dom";
const Electroincs=()=>{
    return(
        <>
            <h1>Electronics are soon..</h1>
            <br /><br />
            <Link to='electronics/toys' style={{marginRight:100}} >Toys</Link>
            <Link to='electronics/household' style={{marginRight:100}} >Household</Link>
            <br /><br />
            <Outlet></Outlet>
        </>
    )
}
export default Electroincs;