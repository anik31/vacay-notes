export function getFilteredNotes(notes, sortByDate, sortByPriority, label, searchTerm){
    switch(sortByDate){
        case "RECENT_FIRST":
            notes = [...notes].sort((a,b)=>new Date(b.created) - new Date(a.created));
            break;
        case "OLD_FIRST":
            notes = [...notes].sort((a,b)=>new Date(a.created) - new Date(b.created));
            break;
        default:
            break;
    }

    switch(sortByPriority){
        case "LOW_TO_HIGH":
            notes = [...notes].sort((a,b)=>a.priority.value-b.priority.value);
            break;
        case "HIGH_TO_LOW":
            notes = [...notes].sort((a,b)=>b.priority.value-a.priority.value);
            break;
        default:
            break;
    }

    notes = label.length!==0 
    ? notes.filter(note=>note.labels.some(labelItem=>label.includes(labelItem)))
    : notes;
    
    notes = searchTerm
    ? notes.filter(note=>note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLowerCase().includes(searchTerm.toLowerCase()))
    : notes;

    return notes;
}