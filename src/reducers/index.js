import { SELECT_SUBREDDIT, SUBREDDIT_DATA_FETCHED } from "../actions";

const reducer = (state = {}, action) => {
    switch(action.type){
        case SELECT_SUBREDDIT:
            return {...state, subreddit: action.payload}
        case SUBREDDIT_DATA_FETCHED:
            return {...state, subreddit_data: action.payload}
        default:
            return state
    }
}

export default reducer