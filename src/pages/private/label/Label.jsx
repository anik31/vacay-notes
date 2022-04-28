import { EmptyPage, Note } from "../../../components";
import { useNote } from "../../../context";

export function Label(){
    const {noteState: {notes,labels}} = useNote();

    return (
        <div className="m-b-4">
            <h2 className="text-title">Labels</h2>
            {labels.length>0
            ? labels.map(label=>{
                return <div key={label}>
                    <h3 className="align-subtitle">{label}</h3>
                    {notes.some(note=>note.labels.includes(label))
                    ? <div className="notes-container">
                        {notes.filter(note=>note.labels.includes(label))
                        .map(note=><Note key={note.id} value={note} />)}
                    </div>
                    : <p className="not-found">No notes found for this label.</p>}
                </div>
            })
            : <EmptyPage/>}
        </div>
    );
}