import { Route, Routes, Link } from "react-router-dom";
import Toys from "./ecomComponent/Toys";
import Mens from "./ecomComponent/Mens";
import Household from "./ecomComponent/Household";
import Iphone from "./ecomComponent/Iphone";
import Kids from "./ecomComponent/Kids";
import Mobiles from "./com/Mobiles";
import Oneplus from "./ecomComponent/Oneplus";
import Fashion from "./ecomComponent/Fashion";
import Electroincs from "./ecomComponent/Electronics";

const Main2 = () => {
    return (
        <>
            <Link to='/electronics' style={{ marginRight: 100 }} >Electronics</Link>
            <Link to='/fashion' style={{ marginRight: 100 }} >Fashion</Link>
            <Link to='/mobiles'  >Mobiles</Link>
            <br /><br /><br />
            <Routes>
                <Route path="electronics" element={<Electroincs />} >
                    <Route path="electronics/toys" element={<Toys />} ></Route>
                    <Route path="electronics/household" element={<Household />} ></Route>

                </Route>
                <Route path="fashion" element={<Fashion />} >
                    <Route path="fashion/menswear" element={<Mens />} ></Route>
                    <Route path="fashion/kidswear" element={<Kids />} ></Route>

                </Route>
                <Route path="mobiles" element={<Mobiles />} >
                    <Route path="mobiles/iphone" element={<Iphone />} ></Route>
                    <Route path="mobiles/oneplus" element={<Oneplus />} ></Route>

                </Route>
            </Routes>

        </>
    )
}
export default Main2;