import { Link, NavLink } from "react-router-dom";
import { useAuth, useNote } from "../../context";
import "./sidebar.css";

const sidebarData = [
    { linkTo: "/archive", linkFor: "Archive", icon: "fas fa-archive" },
    { linkTo: "/trash", linkFor: "Trash", icon: "fas fa-trash" },
    { linkTo: "/profile", linkFor: "Profile", icon: "fas fa-user-circle" }
];

const getActiveStyle = ({ isActive }: {isActive: boolean}) => ({
    color: isActive ? "var(--white-color)" : "",
    backgroundColor: isActive? "var(--primary-color)" : ""
});

export function Sidebar(){
    const {logoutUser, user} = useAuth();
    const {noteState} = useNote();

    return (
        <nav className="sidebar">
            <ul>
                <li>
                    <NavLink style={getActiveStyle} to="/home" className="nav-item">
                        <i className="fas fa-lightbulb"></i>
                        <span>Notes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink style={getActiveStyle} to="/label" className="nav-item">
                        <i className="fas fa-tags"></i>
                        <span>Labels</span>
                    </NavLink>
                    <ul className="label-list"> 
                        {noteState.labels.map(label=><li key={label}>{label}</li>)}       
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
                    {user && <span>{user?.email?.split("@")[0]}</span>}
                </Link>
                <button title="Logout" onClick={()=>logoutUser()} className="btn-icon"><i className="fas fa-sign-out-alt"></i></button>
            </div>
        </nav>
    );
}
