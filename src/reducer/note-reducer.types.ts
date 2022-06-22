import {Note} from "../context/note-context.types";

export type Action = 
| {
    type: "SET_NOTES_LOADING",
    payload: boolean
}
| {
    type: "SET_NOTES",
    payload: Note[]
}
| {
    type: "SET_SEARCH_TERM",
    payload: string
}
| {
    type: "SET_LABELS",
    payload: string[]
}
| {
    type: "SORT_NOTES_BY_DATE",
    payload: string
}
| {
    type: "SORT_NOTES_BY_PRIORITY",
    payload: string
}
| {
    type: "FILTER_BY_LABEL",
    payload: string
}
| {
    type: "CLEAR_ALL_FILTERS"
};