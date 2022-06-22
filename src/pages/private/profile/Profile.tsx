import "./profile.css";
import {useArchive, useAuth, useNote, useTrash} from "../../../context";

export function Profile(){
    const {logoutUser, user} = useAuth();
    const {noteState: {notes}} = useNote();
    const {archiveState} = useArchive();
    const {trashState} = useTrash();

    const avatarText = user && user?.email?.split("@")[0][0];

    return (
        <div className="profile">
            <div>
                <span className="avatar avatar-md avatar-text">{avatarText}</span>
                <h3>{user && user.email}</h3>
                <button onClick={()=>logoutUser()} className="btn btn-primary-outline">LOGOUT</button>
            </div>
            <div>
                <h4 className="text-center">Total Notes</h4>
                <ul>
                    <li>
                        <span>Pinned : </span>
                        <span>{notes.filter(note=>note.isPinned).length}</span>
                    </li>
                    <li>
                        <span>Un-Pinned : </span>
                        <span>{notes.filter(note=>!note.isPinned).length}</span>
                    </li>
                    <li>
                        <span>Archived : </span>
                        <span>{archiveState.length}</span>
                    </li>
                    <li>
                        <span>In trash : </span>
                        <span>{trashState.length}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}