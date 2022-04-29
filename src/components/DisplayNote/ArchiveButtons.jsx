import { useArchive } from "../../context"; 

export function ArchiveButtons({note}){
    const {unarchiveNote, deleteNoteFromArchive} = useArchive();

    return (
        <div>
            <button title="Un-Archive Note" className="btn-icon" onClick={()=>unarchiveNote(note)}>
                <i className="fas fa-folder-open"></i>
            </button>
            <button title="Move to trash" className="btn-icon" onClick={()=>deleteNoteFromArchive(note)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}