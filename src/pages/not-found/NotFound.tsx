import { Link } from "react-router-dom";
import {pageNotFound} from "../../assets";

export function NotFound(){
    return (
        <main className="container-error-page">
            <img src={pageNotFound} alt="404 illustration" />
            <h2>Oops! The page you’re trying to reach doesn’t exist.</h2>
            <Link to="/" className="btn btn-primary">Click here to go back home</Link>
        </main>
    );
}; 