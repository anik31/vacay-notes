import "./landing.css";
import {logo, hero} from "../../assets";
import { Link } from "react-router-dom";

export function Landing(){
    return (
        <div className="landing-container">
            <header>
                <img src={logo} alt="logo" />
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
                    <Link to="/home" className="btn btn-primary">JOIN NOW</Link>
                </div>
                <div className="img-wrapper">
                    <img src={hero} className="img-responsive" alt="hero" />
                </div>
            </main>
        </div>
    );
}