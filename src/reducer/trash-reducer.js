export function trashReducer(state, action){
    switch(action.type){
        case "SET_TRASH":
            return state = action.payload;
        default:
            return state;
    }
}