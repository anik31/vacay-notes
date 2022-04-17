import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const sidebarData = [
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
                <li>
                    <NavLink style={getActiveStyle} to="/home" className="nav-item">
                        <i className="fas fa-lightbulb"></i>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink style={getActiveStyle} to="/label" className="nav-item">
                        <i className="fas fa-tags"></i>
                        <span>Labels</span>
                    </NavLink>
                    <ul className="label-list">        
                        <li>Label1</li>
                        <li>Label2</li>
                    </ul>
                </li>
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
                <button title="Logout" className="btn-icon"><i className="fas fa-sign-out-alt"></i></button>
            </div>
        </nav>
    );
}
