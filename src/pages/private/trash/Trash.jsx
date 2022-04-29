import { Note, EmptyPage } from "../../../components";
import { useTrash } from "../../../context";

export function Trash(){
    const {trashState} = useTrash();

    return (
        <div>
            <h2 className="text-title">Trash</h2>
            {trashState.length>0
            ? <div className="notes-container m-b-4">
                {trashState.map(note=><Note key={note.id} value={note}/>)}
            </div>
            : <EmptyPage/>
            }
        </div>
    );
}