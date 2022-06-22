import "./note.css";
import {filledPin, outlinePin} from "../../assets";
import { useLocation } from "react-router-dom";
import { HomeButtons } from "./HomeButtons";
import { ArchiveButtons } from "./ArchiveButtons";
import { TrashButtons } from "./TrashButtons";
import { useNote } from "../../context";
import { Note as NoteType } from "context/note-context.types";

type NoteProp = {
    value: NoteType
}

export function Note({value}: NoteProp){
    const {pathname} = useLocation();
    const {color, content, created, isPinned, labels, priority, title} = value;
    const {updateNote} = useNote();
    
    const pinHandler = () => {
        updateNote({...value, isPinned: !value.isPinned});
    }

    return (
        <div className="note" style={{backgroundColor:color}}>
            {pathname==="/home" && (isPinned 
            ? <img src={filledPin} title="Unpin Note" className="btn-pin" alt="pin" onClick={pinHandler} />
            : <img src={outlinePin} title="Pin Note" className="btn-pin" alt="pin" onClick={pinHandler} />)}
            <div>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
            <div>
                <div className="label-pills">
                    <div>
                        {labels?.map(label=><span key={label}>{label}</span>)}
                    </div>
                    {priority?.name && <span>{priority?.name}</span>}
                </div>
                
                <div className="note-tools">
                    <span className="text-gray">Created on: {created}</span>
                    {(pathname==="/home" && <HomeButtons note={value} />) 
                    || (pathname==="/archive" && <ArchiveButtons note={value} />) 
                    || (pathname === "/trash" && <TrashButtons note={value} />) 
                    || (pathname === "/label" && <></>)}
                </div>
            </div>
        </div>
    );
}