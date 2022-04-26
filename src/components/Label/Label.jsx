import { useNote } from "../../context";
import "./label.css";

export function LabelModal({setIsLabelModalOpen, note, setNote}){
    const {noteState} = useNote();

    const addLabelToNoteHandler = (e) => {
        const targetLabel = e.target.dataset.label;
        if(note.labels.includes(targetLabel)){
            setNote(prev=>({...prev, labels: prev.labels.filter(item=>item!==targetLabel)}))
        }else{
            setNote(prev=>({...prev, labels: prev.labels.concat(targetLabel)}));
        }
    }

    return (
        <div className="label-select">
            <h4>Label</h4>
            <i className="fas fa-times" onClick={()=>setIsLabelModalOpen(false)}></i>
            <ul>
                {noteState.labels.map(label=>
                    <li key={label}><label><input data-label={label} type="checkbox" checked={note.labels.includes(label)} onChange={addLabelToNoteHandler} />{label}</label></li>
                )}
            </ul>
        </div>
    );
}