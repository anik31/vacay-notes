import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const sidebarData = [
    { linkTo: "/home", linkFor: "Notes", icon: "fas fa-lightbulb" },
    { linkTo: "/archive", linkFor: "Archive", icon: "fas fa-archive" },
    { linkTo: "/trash", linkFor: "Trash", icon: "fas fa-trash" },
    { linkTo: "/profile", linkFor: "Profile", icon: "fas fa-user-circle" }
];

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "var(--white-color)" : "",
    backgroundColor: isActive? "var(--primary-color)" : ""
});

export function Sidebar(){
    return (
        <nav className="sidebar">
            <ul>
            {sidebarData.map(item=>
                <li key={item.linkTo}>
                    <NavLink style={getActiveStyle} to={item.linkTo} className="nav-item">
                        <i className={item.icon}></i>
                        <span>{item.linkFor}</span>
                    </NavLink>
                </li>
            )}
            </ul>
            <div className="nav-item">
                <Link to="/profile" className="user">
                    <i className="fas fa-user"></i>
                    <span>Username</span>
                </Link>
                <button className="btn-icon"><i className="fas fa-sign-out-alt"></i></button>
            </div>
        </nav>
    );
}
