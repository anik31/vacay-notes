import { Note } from "context/note-context.types";

type Action = {type: "SET_ARCHIVE", payload: Note[]}

export function archiveReducer(state: Note[], action: Action){
    switch(action.type){
        case "SET_ARCHIVE":
            return state = action.payload;
        default:
            return state;
    }
};
