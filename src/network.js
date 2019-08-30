const API_BASE_URL = "https://www.reddit.com/r"

const getUrl = endpoint => `${API_BASE_URL}/${endpoint}.json`

export const get = endpoint => {
    return fetch(getUrl(endpoint))
            .then(httpResponse => {
                if(httpResponse.ok) {
                    return httpResponse.json()
                }
            })
            
}