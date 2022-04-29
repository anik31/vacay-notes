import { useTrash } from "../../context";

export function TrashButtons({note}){
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