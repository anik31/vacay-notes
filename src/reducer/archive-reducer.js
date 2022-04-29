export function archiveReducer(state, action){
    switch(action.type){
        case "SET_ARCHIVE":
            return state = action.payload;
        default:
            return state;
    }
}