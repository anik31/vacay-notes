import { Note } from "context/note-context.types";

type Action = {type: "SET_TRASH", payload: Note[]}

export function trashReducer(state: Note[], action: Action){
    switch(action.type){
        case "SET_TRASH":
            return state = action.payload;
        default:
            return state;
    };
};
