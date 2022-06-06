import "./navbar.css";
import {logo} from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useNote } from "../../context";
import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks";

export function Navbar(){
    const {pathname} = useLocation();
    const {noteDispatch} = useNote();
    const [searchVal, setSearchVal] = useState("");
	const debouncedSearchVal = useDebounce(searchVal, 300);

	useEffect(() => {
		noteDispatch({type: "SET_SEARCH_TERM", payload: debouncedSearchVal});
	}, [debouncedSearchVal, noteDispatch]);

    return (
        <header className="header">
            <div className="logo-wrapper">
                <Link to="/home"><img src={logo} alt="vacay-stream-logo" className="logo" /></Link>
            </div>
            {pathname==="/home" && 
            <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" onChange={({target})=>setSearchVal(target.value)} />
            </div>}
            <div></div>

            {/* TODO - To be implemented in the future...
            <button title="Dark Mode" className="btn-icon"><i className="fas fa-moon"></i></button> */}
        </header>
    );
}