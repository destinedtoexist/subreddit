import { get } from '../network'

export const SELECT_SUBREDDIT = "select-subreddit";
export const SUBREDDIT_DATA_FETCHED = "subreddit-data-fetched"


export const selectSubreddit = (subreddit) => {
    return {
        type: SELECT_SUBREDDIT,
        payload: subreddit
    }
}

const subredditDataFetched = (data) => {
    return {
        type: SUBREDDIT_DATA_FETCHED,
        payload: data
    }
}




//Thunks

export const fetchSubredditData = (subreddit) => {
    return (dispatch) => {
        get(subreddit.endpoint)
            .then(response => {
                dispatch(subredditDataFetched(response))
            })
    }
}