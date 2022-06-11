import { useState } from "react";
import "./createNote.css";
import {filledPin, outlinePin} from "../../assets";
import { ColorPallete } from "../ColorPallete/ColorPallete";
import { LabelModal } from "../Label/Label";
import { useNote } from "../../context";
import { toast } from "react-toastify";

export function CreateNote(){
    const [isColorPalleteOpen, setIsColorPalleteOpen] = useState(false);
    const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);
    const {addNote, updateNote,
        isExpanded, setIsExpanded,
        note, setNote, initialNoteState, 
        prevNote, setPrevNote,
        isNoteUpdate, setIsNoteUpdate} = useNote();
    
    const pinHandler = () => {
        setNote(prev=>({...prev,isPinned:!prev.isPinned}));
    }

    const closeCreateNoteHandler = () => {
        setIsExpanded(false);
        setIsNoteUpdate(false);
        setPrevNote(false);
        setIsColorPalleteOpen(false);
        setIsLabelModalOpen(false);
        setNote(initialNoteState);
    }

    const createNoteHandler = () => {
        if(note.title.trim()!=="" || note.content.trim()!==""){
            if(isNoteUpdate){
                updateNote({id:prevNote.id, ...note, title: note.title.trim(), content: note.content.trim()})
                toast.success("Note updated"); 
            }else{
                addNote({...note, title: note.title.trim(), content: note.content.trim()});
            }
            closeCreateNoteHandler();
        }else{
            toast.warning("Note cannot be empty");
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

    const priorityHandler = e => {
        const priorityName = e.target.value;
        let priorityValue;

        if(priorityName==="Low"){
            priorityValue=0;
        }else if(priorityName==="Medium"){
            priorityValue=1;
        }else if(priorityName==="High"){
            priorityValue=2;
        }
        
        setNote(prev=>({...prev,priority:{...prev.priority, name: priorityName, value: priorityValue}}));
    }

    return (
        <div className=" create-note" style={{backgroundColor: note.color}}>
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
                    <select defaultValue="" onChange={priorityHandler}>
                        <option value="" disabled hidden>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>

                    <button className="btn-icon" title="Add Labels" onClick={labelHandler}><i className="fas fa-tags"></i></button>
                    
                    {isLabelModalOpen && <LabelModal setIsLabelModalOpen={setIsLabelModalOpen} />}
                    
                    <button className="btn-icon" title="Add background color" onClick={colorPalleteHandler}><i className="fas fa-palette"></i></button>
                    
                    {isColorPalleteOpen && <ColorPallete setIsColorPalleteOpen={setIsColorPalleteOpen} />}
                </div>
                <div>
                    <button className="btn btn-primary-outline" onClick={closeCreateNoteHandler}>Close</button>
                    <button className="btn btn-primary" onClick={createNoteHandler}>Save</button>
                </div>
            </footer>}

        </div>
    );
}