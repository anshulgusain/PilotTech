
import { Routes, Route } from "react-router-dom"
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import Home from "../Components/Home";
import Subscribe from "../Components/Subscribe";
import Signup from "../Components/Signup";
import AdminLogin from "../Components/AdminLogin";
import Admin from "../Components/Admin";

const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/subscription" element={<Subscribe />} ></Route>
                <Route path="/home" element={<Home />} ></Route>
                <Route path="/signup" element={<Signup />} ></Route>
                <Route path="/adminLogin" element={<AdminLogin />} ></Route>
                <Route path="/admin" element={<Admin />} ></Route>


            </Routes>
        </div>
    )
}

export default AllRoutes;