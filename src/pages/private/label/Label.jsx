import { Note } from "../../../components";

export function Label(){
    return (
        <div>
            <h2 className="text-title">Labels</h2>
            <h4 className="align-subtitle">Label1</h4>
            <div className="notes-container">
                <Note/>
                <Note/>
                <Note/>
            </div>
            <h4 className="align-subtitle">Label2</h4>
            <div className="notes-container m-b-4">
                <Note/>
                <Note/>
                <Note/>
            </div>
        </div>
    );
}