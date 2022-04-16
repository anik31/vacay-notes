import "./label.css";

export function LabelModal({setIsLabelModalOpen}){
    return (
        <div className="label-modal">
            <h4>Label</h4>
            <ul>
                <li><label><input type="checkbox"/>label1</label></li>
                <li><label><input type="checkbox"/>label2</label></li>
            </ul>
            <div className="input-btn-wrapper">
                <input type="text" placeholder="Label" />    
                <button className="btn btn-primary-outline" onClick={()=>setIsLabelModalOpen(false)}>Add</button>
            </div>
        </div>
    );
}