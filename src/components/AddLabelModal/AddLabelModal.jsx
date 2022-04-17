import "./addLabelModal.css";

export function AddLabel({setIsLabelModalVisible}){
    return (
        <div className="modal-wrapper">
            <output className="modal add-label-modal">
                <button onClick={()=>setIsLabelModalVisible(false)}><i className="btn-icon fas fa-times"></i></button>
                <h2>Add New Label</h2>
                <input type="text" placeholder="Label name" />
                <button className="btn btn-primary"  onClick={()=>setIsLabelModalVisible(false)}>Add Label</button>
            </output>
        </div>
    );
}