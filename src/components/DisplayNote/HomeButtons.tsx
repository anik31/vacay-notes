import { Note } from "context/note-context.types";
import { useArchive, useNote } from "../../context"; 

type HomeButtonsProp = {
    note: Note
};

export function HomeButtons({note}: HomeButtonsProp){
    const {archiveNote} = useArchive();
    const {deleteNoteFromNotes, setNote, setIsExpanded, setIsNoteUpdate, setPrevNote} = useNote();

    const updateNoteHandler = () => {
        setNote(note);
        setIsExpanded(true);
        setIsNoteUpdate(true);
        setPrevNote(note);
    }

    return (
        <div>
            <button title="Edit Note" className="btn-icon" onClick={updateNoteHandler}>
                <i className="fas fa-edit"></i>
            </button>
            <button title="Archive Note" className="btn-icon" onClick={()=>archiveNote(note)}>
                <i className="fas fa-archive"></i>
            </button>
            <button title="Move to Trash" className="btn-icon" onClick={()=>deleteNoteFromNotes(note)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};
