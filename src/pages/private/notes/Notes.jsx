import { useState } from "react";
import { CreateNote, AddLabel, FilterModal, Note } from "../../../components";
import "./notes.css";

export function Notes(){
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isLabelModalVisible, setIsLabelModalVisible] = useState(false);

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
            <h4 className="align-subtitle">Pinned Notes</h4>
            <div className="notes-container">
                <Note/>
                <Note/>
                <Note/>
            </div>
            <h4 className="align-subtitle">Others</h4>
            <div className="notes-container m-b-4">
                <Note/>
                <Note/>
                <Note/>
            </div>
            {isFilterVisible && <FilterModal setIsFilterVisible={setIsFilterVisible} />}
            {isLabelModalVisible && <AddLabel setIsLabelModalVisible={setIsLabelModalVisible} />}
        </div>
    );
}