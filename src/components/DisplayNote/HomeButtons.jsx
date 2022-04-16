export function HomeButtons(){
    return (
        <div>
            <button title="Edit Note" className="btn-icon"><i className="fas fa-edit"></i></button>
            <button title="Archive Note" className="btn-icon"><i className="fas fa-archive"></i></button>
            <button title="Move to Trash" className="btn-icon"><i className="fas fa-trash"></i></button>
        </div>
    );
}