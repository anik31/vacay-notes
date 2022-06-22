import { Note } from "context/note-context.types";
import { useTrash } from "../../context";

type TrashButtonsProp = {
    note: Note
};

export function TrashButtons({note}: TrashButtonsProp){
    const {restoreNote, deleteNotePermanently} = useTrash();

    return (
        <div>
            <button title="Restore Note" className="btn-icon" onClick={()=>restoreNote(note)}>
                <i className="fas fa-trash-restore"></i>
            </button>
            <button title="Delete Note" className="btn-icon" onClick={()=>deleteNotePermanently(note)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}