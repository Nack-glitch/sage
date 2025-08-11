import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "../pages/AddTask";
import About from "../pages/About";

export default function Layout()  {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>,
            <Route path="/addtaske" element={<AddTask/>}>,
            <Route path="/about" element={<About/>}>,
        </Routes>
        </BrowserRouter>
        </>
    )
}