import { Note } from "./note-context.types";

export type ArchivePropType = {
    archiveState: Note[], 
    archiveDispatch: Function, 
    isArchiveLoading: boolean,
    archiveNote: (value: Note) => void, 
    unarchiveNote: (value: Note) => void, 
    deleteNoteFromArchive: (value: Note) => void
};
