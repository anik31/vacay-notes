export function TrashButtons(){
    return (
        <div>
            <button title="Restore Note" className="btn-icon"><i className="fas fa-trash-restore"></i></button>
            <button title="Delete Note" className="btn-icon"><i className="fas fa-trash"></i></button>
        </div>
    );
}