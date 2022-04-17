import { Link } from "react-router-dom";
import {noData} from "../assets";

export function EmptyPage(){
    return (
        <main className="container-error-page">
            <img src={noData} alt="no data found" />
            <h3>Oops! No notes found.</h3>
            <Link to="/home" className="btn btn-primary">Click here to go back home</Link>
        </main>
    );
}; 