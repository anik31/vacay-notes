import { EmptyPage, Note } from "../../../components";
import { useArchive } from "../../../context";

export function Archive(){
    const {archiveState} = useArchive();

    return (
        <div>
            <h2 className="text-title">Archive</h2>
            {archiveState.length>0
            ? <div className="notes-container m-b-4">
                {archiveState.map(note=><Note key={note.id} value={note}/>)}
            </div>
            : <EmptyPage/>
            }
        </div>
    );
}