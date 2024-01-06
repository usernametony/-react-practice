import { Route,Routes,Link } from "react-router-dom";
import Watches from "./com/Watches";
import Laptops from "./com/Laptops";
import Mobiles from "./com/Mobiles";
const Main1=()=>{
    return(
        <>
            <Link to='/watches' style={{marginRight:100}} >Watches</Link>
            <Link to='/laptops' style={{marginRight:100}} >Laptops</Link>
            <Link to='/mobiles' >Mobiles</Link>
            <br /><br />
            <Routes>
                <Route path="watches" element={<Watches/>} ></Route>
                <Route path="laptops" element={<Laptops/>} ></Route>
                <Route path="mobiles" element={<Mobiles/>} ></Route>
                
            </Routes>
        </>
    )
}
export default Main1;