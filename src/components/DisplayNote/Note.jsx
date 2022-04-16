import "./note.css";
import { useState } from "react";
import {filledPin, outlinePin} from "../../assets";
import { useLocation } from "react-router-dom";
import { HomeButtons } from "./HomeButtons";
import { ArchiveButtons } from "./ArchiveButtons";
import { TrashButtons } from "./TrashButtons";

export function Note(){
    const [isPinned, setIsPinned] = useState(false);
    const {pathname} = useLocation();

    const pinHandler = () => {
        setIsPinned(prev=>!prev);
    }

    return (
        <div className="note">
            {pathname==="/home" && (isPinned 
            ? <img src={filledPin} title="Unpin Note" className="btn-pin" alt="pin" onClick={pinHandler} />
            : <img src={outlinePin} title="Pin Note" className="btn-pin" alt="pin" onClick={pinHandler} />)}
            <div>
                <h4>note title</h4>
                <p>note contenb cjbcxbnxnbnnsdvsbfsbf fdvsftd</p>
            </div>
            <div>
                <div className="label-pills">
                    <div>
                        <span>Label1</span>
                        <span>Label2</span>
                    </div>
                    <span>Low</span>
                </div>
                
                <div className="note-tools">
                    <span className="text-gray">Created on: 2022-4-7 23:13</span>
                    {(pathname==="/home" && <HomeButtons/>) 
                    || (pathname==="/archive" && <ArchiveButtons/>) 
                    || (pathname === "/trash" && <TrashButtons/>) 
                    || (pathname === "/label" && <></>)}
                </div>
            </div>
        </div>
    );
}