import { Link,Outlet } from "react-router-dom";
const Fashion=()=>{
    return(
        <>
        <h1>Fashion Items are soon.</h1>
        <br /><br />
         <Link to='fashion/menswear' style={{marginRight:100}} >Mens Wear</Link>
         <Link to='fashion/kidswear' style={{marginRight:100}} >Kids Wear</Link>
         <br /><br />
         <Outlet></Outlet>

        </>
    )
}
export default Fashion;