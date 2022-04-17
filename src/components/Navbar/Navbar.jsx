import "./navbar.css";
import {logo} from "../../assets";
import { Link, useLocation } from "react-router-dom";

export function Navbar(){
    const {pathname} = useLocation();

    return (
        <header className="header">
            <div className="logo-wrapper">
                <Link to="/home"><img src={logo} alt="vacay-stream-logo" className="logo" /></Link>
            </div>
            {pathname==="/home" && 
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>}
            <button title="Dark Mode" className="btn-icon"><i className="fas fa-moon"></i></button>
        </header>
    );
}