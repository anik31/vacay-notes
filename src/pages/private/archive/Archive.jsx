import { Note } from "../../../components";

export function Archive(){
    return (
        <div>
            <h2 className="text-title">Archived Notes</h2>
            <div className="notes-container m-b-4">
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
                <Note/>
            </div>
        </div>
    );
}