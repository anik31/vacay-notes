import "./navbar.css";
import {logo} from "../../assets";
import { Link } from "react-router-dom";

export function Navbar(){

    return (
        <header className="header">
            <div className="logo-wrapper">
                <Link to="/home"><img src={logo} alt="vacay-stream-logo" className="logo" /></Link>
            </div>
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>
            <button className="btn-icon"><i className="fas fa-moon"></i></button>
        </header>
    );
}