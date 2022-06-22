import { Note } from "./note-context.types";

export type TrashPropType = {
    trashState: Note[], 
    trashDispatch: Function, 
    isTrashLoading: boolean,
    restoreNote: (value: Note) => void, 
    deleteNotePermanently: (value: Note) => void
};
