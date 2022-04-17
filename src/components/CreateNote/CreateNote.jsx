import { useState } from "react";
import "./createNote.css";
import {filledPin, outlinePin} from "../../assets";
import { ColorPallete } from "../ColorPallete/ColorPallete";
import { LabelModal } from "../Label/Label";

export function CreateNote(){
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const [isColorPalleteOpen, setIsColorPalleteOpen] = useState(false);
    const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);
    const [note, setNote] = useState({
        title:"",
        content:""
    });

    const pinHandler = () => {
        setIsPinned(prev=>!prev);
    }

    return (
        <div className="box-shadow create-note">
            {isExpanded && 
            (isPinned 
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
                    <select defaultValue="">
                        <option value="" disabled hidden>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    <button className="btn-icon" title="Add Labels" onClick={()=>setIsLabelModalOpen(prev=>!prev)}><i className="fas fa-tags"></i></button>
                    {isLabelModalOpen && <LabelModal setIsLabelModalOpen={setIsLabelModalOpen} />}
                    <button className="btn-icon" title="Add background color" onClick={()=>setIsColorPalleteOpen(prev=>!prev)}><i className="fas fa-palette"></i></button>
                    {isColorPalleteOpen && <ColorPallete setIsColorPalleteOpen={setIsColorPalleteOpen} />}
                </div>
                <div>
                    <button className="btn btn-primary-outline" onClick={()=>setIsExpanded(false)}>Close</button>
                    <button className="btn btn-primary">Save Note</button>
                </div>
            </footer>}

        </div>
    );
}