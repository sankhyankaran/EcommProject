import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Roots() {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default Roots