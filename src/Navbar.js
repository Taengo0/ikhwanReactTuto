import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"><h1>Dojo Blog</h1></Link>
            <div className="content">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/redux">Redux Counter</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;