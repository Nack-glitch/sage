import { Link } from "react-router-dom"
function Header(){
    return <>
     <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to ="/About">ABOUT</Link>
        <br/>
        <Link to ="/Contact">CONTACT</Link>
        <br/>
        <Link to="/catagory">catagory</Link>
    </nav>

    </>
}
export default Header