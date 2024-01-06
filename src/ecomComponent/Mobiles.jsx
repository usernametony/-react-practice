import { Link,Outlet } from "react-router-dom";
const Mobiles=()=>{
    return(
        <>
            <h2>Mobile are soon</h2>
            <Link to='mobiles/iphone' style={{marginRight:100}} >Iphones</Link>
            <Link to='mobiles/oneplus' style={{marginRight:100}} >OnePlus</Link>
            <br /><br />
            <Outlet></Outlet>
        </>
    )
}
export default Mobiles;