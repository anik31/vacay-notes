import { useState } from "react";
import { CreateNote, AddLabel, FilterModal, Note } from "../../../components";
import { useNote } from "../../../context";
import "./notes.css";
import { getFilteredNotes } from "../../../utils";

export function Notes(){
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isLabelModalVisible, setIsLabelModalVisible] = useState(false);
    const {noteState: {notes, searchTerm, filters: {sortByDate, sortByPriority, label}}} = useNote();

    const filteredNotes = getFilteredNotes(notes, sortByDate, sortByPriority, label, searchTerm);

    return (
        <div>
            <div className="note-filter-wrapper">
                <CreateNote/>
                <div>
                    <button className="btn btn-primary-outline" onClick={()=>setIsFilterVisible(prev=>!prev)}>
                        <i className="btn-icon btn-primary-icon fas fa-filter"></i>
                    Sort | Filter</button>
                    <button className="btn btn-primary-outline" onClick={()=>setIsLabelModalVisible(prev=>!prev)}>
                        <i className="btn-icon btn-primary-icon fas fa-tags"></i>
                    Add Label</button>
                </div>
            </div>
            
            <h3 className="align-subtitle">Pinned Notes</h3>
            {filteredNotes.some(note=>note.isPinned)
            ? <div className="notes-container">
                {filteredNotes.filter(note=>note.isPinned).map(note=><Note key={note.id} value={note}/>)}
            </div>
            : <p className="not-found">No Pinned notes found.</p> }
            
            <h3 className="align-subtitle">Others</h3>
            {filteredNotes.some(note=>!note.isPinned)
            ? <div className="notes-container m-b-4">
                {filteredNotes.filter(note=>!note.isPinned).map(note=><Note key={note.id} value={note}/>)}
            </div>
            : <p className="not-found">No notes found.</p> }

            {isFilterVisible && <FilterModal setIsFilterVisible={setIsFilterVisible} />}
            {isLabelModalVisible && <AddLabel setIsLabelModalVisible={setIsLabelModalVisible} />}
        </div>
    );
}