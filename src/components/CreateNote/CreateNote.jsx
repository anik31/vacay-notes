import { useState } from "react";
import "./createNote.css";
import {filledPin, outlinePin} from "../../assets";
import { ColorPallete } from "../ColorPallete/ColorPallete";
import { LabelModal } from "../Label/Label";
import { useNote } from "../../context";
import {getCurrentDateTime} from "../../utils";

const initialNoteState = {
    title:"",
    content:"",
    isPinned: false,        
    labels: [],
    priority: "",
    color: "#fff",
    created: getCurrentDateTime()
};

export function CreateNote(){
    const [isExpanded, setIsExpanded] = useState(false);
    const [isColorPalleteOpen, setIsColorPalleteOpen] = useState(false);
    const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);
    const [note, setNote] = useState(initialNoteState);
    const {addNote} = useNote();

    const pinHandler = () => {
        setNote(prev=>({...prev,isPinned:!prev.isPinned}));
    }

    const closeCreateNoteHandler = () => {
        setNote(initialNoteState);
        setIsExpanded(false)
    }

    const createNoteHandler = () => {
        if(note.title!=="" || note.content!==""){
            addNote(note);
            closeCreateNoteHandler();
        }
    }

    const labelHandler = () => {
        setIsColorPalleteOpen(false);
        setIsLabelModalOpen(prev=>!prev);
    }

    const colorPalleteHandler = () => {
        setIsLabelModalOpen(false);
        setIsColorPalleteOpen(prev=>!prev);
    }

    return (
        <div className=" create-note" style={{backgroundColor:note.color}}>
            {isExpanded && 
            (note.isPinned 
            ? <img src={filledPin} title="Unpin Note" className="btn-pin" alt="pin" onClick={pinHandler} />
            : <img src={outlinePin} title="Pin Note" className="btn-pin" alt="pin" onClick={pinHandler} />)}
            
            {isExpanded && 
            <input
                onChange={(e)=>setNote(prev=>({...prev,title:e.target.value}))}
                placeholder="Title"
                value={note.title}
            />}

            <textarea
                onClick={()=>setIsExpanded(true)}
                onChange={(e)=>setNote(prev=>({...prev,content:e.target.value}))}
                placeholder="Take a note..."
                rows={isExpanded ? 2 : 1}
                value={note.content}
            />

            {isExpanded && <footer className="note-tools">
                <div>
                    <select defaultValue="" onChange={(e)=>setNote(prev=>({...prev,priority:e.target.value}))}>
                        <option value="" disabled hidden>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <button className="btn-icon" title="Add Labels" onClick={labelHandler}><i className="fas fa-tags"></i></button>
                    
                    {isLabelModalOpen && <LabelModal note={note} setNote={setNote} setIsLabelModalOpen={setIsLabelModalOpen} />}
                    
                    <button className="btn-icon" title="Add background color" onClick={colorPalleteHandler}><i className="fas fa-palette"></i></button>
                    
                    {isColorPalleteOpen && <ColorPallete setNote={setNote} setIsColorPalleteOpen={setIsColorPalleteOpen} />}
                </div>
                <div>
                    <button className="btn btn-primary-outline" onClick={closeCreateNoteHandler}>Close</button>
                    <button className="btn btn-primary" onClick={createNoteHandler}>Save</button>
                </div>
            </footer>}

        </div>
    );
}