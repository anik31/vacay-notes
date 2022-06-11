import "./addLabelModal.css";
import { useState } from "react";
import { useNote } from "../../context";
import { toast } from "react-toastify";

export function AddLabel({setIsLabelModalVisible}){
    const [label, setLabel] = useState("");
    const {addLabel} = useNote();

    const addLabelHandler = () => {
        if(label.trim()!==""){
            addLabel(label.trim());
            setIsLabelModalVisible(false);
        }else{
            toast.warning("Can't create empty label");
        }
    };

    return (
        <div className="modal-wrapper">
            <output className="modal add-label-modal">
                <button onClick={()=>setIsLabelModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h2>Add New Label</h2>
                <input type="text" placeholder="Label name" value={label} onChange={(e)=>setLabel(e.target.value)} />
                <button className="btn btn-primary"  onClick={addLabelHandler}>Add Label</button>
            </output>
        </div>
    );
}