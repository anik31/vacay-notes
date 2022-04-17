import { Note } from "../../../components";

export function Trash(){
    return (
        <div>
            <h2 className="text-title">Trash</h2>
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