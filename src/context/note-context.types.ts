type Filters = {
    sortByDate: string,
    sortByPriority: string,
    label: string[]
}

export type Priority = {
    name: string,
    value: number
}

export type Note = {
    id?: string,
    title?:string,
    content?:string,
    isPinned: boolean,        
    labels?: string[],
    priority: Priority,
    color: string,
    created: string
}

export type NoteReducer = {
    notes: Note[],
    searchTerm: string,
    labels: string[],
    filters: Filters,
    isNotesLoading: boolean
}

type NoteFunction = (value: Note) => Note


export type NotePropsType = {
    noteState: NoteReducer,
    noteDispatch: Function,
    note: Note,
    setNote: (value: NoteFunction | Note) => void,
    initialNoteState: Note,
    prevNote?: Note, 
    setPrevNote: (value: Note) => void, 
    isExpanded: boolean, 
    setIsExpanded: (value: boolean) => void,
    isNoteUpdate: boolean, 
    setIsNoteUpdate: (value: boolean) => void, 
    addNote: (value: Note) => void, 
    updateNote: (value: Note) => void, 
    deleteNoteFromNotes: (value: Note) => void, 
    addLabel: (value: string) => void
}