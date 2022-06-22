import { NoteReducer } from "context/note-context.types";
import { Action } from "./note-reducer.types";

export function noteReducer(state: NoteReducer, action: Action){
    switch(action.type){
        case "SET_NOTES_LOADING":
            return {...state, isNotesLoading: action.payload};
        case "SET_NOTES":
            return {...state, notes: action.payload};
        case "SET_SEARCH_TERM":
            return {...state, searchTerm: action.payload};
        case "SET_LABELS":
            return {...state, labels: action.payload};
        case "SORT_NOTES_BY_DATE":
            return {...state, filters: {
                ...state.filters,
                sortByDate: action.payload
            }};
        case "SORT_NOTES_BY_PRIORITY":
            return {...state, filters: {
                ...state.filters,
                sortByPriority: action.payload
            }};
        case "FILTER_BY_LABEL":
            return state.filters.label.includes(action.payload)
                ?{...state, filters: {
                    ...state.filters,
                    label:[...state.filters.label].filter(item=>item!==action.payload)
                }}
                :{...state, filters: {
                    ...state.filters,
                    label:[...state.filters.label].concat(action.payload)
            }};
        case "CLEAR_ALL_FILTERS":
            return {...state, filters: {
                sortByDate: "",
                sortByPriority: "",
                label: []
            }};
        default:
            return state;
    }
}