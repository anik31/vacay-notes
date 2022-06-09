import "./landing.css";
import {logo, hero} from "../../assets";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";

export function Landing(){
    const {isLoggedIn} = useAuth();

    return (
        <div className="landing-container">
            <header>
                <img src={logo} alt="logo" />
                
                {/* TODO - To be implemented in the future... 
                <button title="Dark Mode" className="btn-icon"><i className="fas fa-moon"></i></button> */}
            </header>
            <main className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <div>
                            <h3>Take Note With Purpose</h3>
                            <h3>Be a part of <span className="text-primary">Vacay Notes App</span></h3>
                        </div>
                        <p>Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
                    </div>
                    <Link to={isLoggedIn ? "/home" : "/login"} className="btn btn-primary">Join Now</Link>
                </div>
                <div className="img-wrapper">
                    <img src={hero} className="img-responsive" alt="hero" />
                </div>
            </main>
        </div>
    );
}