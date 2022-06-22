import { Note } from "context/note-context.types";
import { useArchive } from "../../context"; 

type ArchiveButtonsProp = {
    note: Note
};

export function ArchiveButtons({note}: ArchiveButtonsProp){
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
};
