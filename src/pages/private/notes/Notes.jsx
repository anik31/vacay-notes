import { useState } from "react";
import { CreateNote, AddLabel, FilterModal } from "../../../components";
import "./notes.css";

export function Notes(){
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isLabelModalVisible, setIsLabelModalVisible] = useState(false);

    return (
        <div>
            <div className="note-filter-wrapper">
                <button className="btn btn-primary-outline" onClick={()=>setIsFilterVisible(prev=>!prev)}>
                    <i className="btn-icon btn-primary-icon fas fa-filter"></i>
                Sort | Filter</button>
                <CreateNote/>
                <button className="btn btn-primary-outline" onClick={()=>setIsLabelModalVisible(prev=>!prev)}>
                    <i className="btn-icon btn-primary-icon fas fa-tags"></i>
                Add Label</button>
            </div>
            <h1>notes</h1>
            {isFilterVisible && <FilterModal setIsFilterVisible={setIsFilterVisible} />}
            {isLabelModalVisible && <AddLabel setIsLabelModalVisible={setIsLabelModalVisible} />}
        </div>
    );
}