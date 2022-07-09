import { useNote } from "../../context";
import "./label.css";

export function LabelModal(){
    const {noteState, note, setNote} = useNote();

    const addLabelToNoteHandler = (e: any) => {
        const targetLabel = e.target.dataset.label;
        if(note?.labels?.includes(targetLabel)){
            setNote(prev=>({...prev, labels: prev?.labels?.filter(item=>item!==targetLabel)}))
        }else{
            setNote(prev=>({...prev, labels: prev?.labels?.concat(targetLabel)}));
        }
    }

    return (
        <div className="label-select">
            <h4>Label</h4>
            <ul>
                {noteState?.labels?.map(label=>
                    <li key={label}>
                        <label>
                            <input data-label={label} type="checkbox" checked={note?.labels?.includes(label)} 
                            onChange={addLabelToNoteHandler} />
                            <span>{label}</span>
                        </label>
                    </li>
                )}
            </ul>
        </div>
    );
}