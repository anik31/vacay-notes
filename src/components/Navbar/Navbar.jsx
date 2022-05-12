import "./navbar.css";
import {logo} from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useNote } from "../../context";

export function Navbar(){
    const {pathname} = useLocation();
    const {noteDispatch} = useNote();

    const searchHandler = ({target}) => {
        noteDispatch({type:"SET_SEARCH_TERM", payload:target.value});
    };

    return (
        <header className="header">
            <div className="logo-wrapper">
                <Link to="/home"><img src={logo} alt="vacay-stream-logo" className="logo" /></Link>
            </div>
            {pathname==="/home" && 
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" onChange={searchHandler} />
            </div>}
            <button title="Dark Mode" className="btn-icon"><i className="fas fa-moon"></i></button>
        </header>
    );
}