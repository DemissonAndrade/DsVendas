import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluir">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark my-2 my-md-0 mr-md-3">
                <div className="container-fluid ">
                    <Link to= "/">
                    <h3 className="text-primary">DevSuperior</h3>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;