import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSubredditData } from './actions';
import styled from 'styled-components';


const Reddit = styled.div`
    margin: 8px 4px;
    padding: 8px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);

`

const Img = styled.img`
    width: 100%;
    object-fit: cover;
`

const getIframe = (data) => {
    if(!data.media) return "";
    if(data.media.oembed) {
        return data.media.oembed.html
    }
    return data.media_embed.content
}

const _FeedContainer = styled.div`
    @media(min-width: 768px) {
        width: 550px;
    }
`

const Feed = () => {

    const subreddit= useSelector(state => state.subreddit)

    const subreddit_data = useSelector(state => state.subreddit_data)

    const dispatch = useDispatch()

    useEffect(() => {
        if(subreddit) {
            dispatch(fetchSubredditData(subreddit))
        }
    }, [subreddit])

    const reddits = subreddit_data ? subreddit_data.data.children : [];

    console.log(reddits);
    

    return (
        <_FeedContainer>
            {reddits.map(({data}) => 
                <Reddit key={data.id} >
                    <div>{data.title}</div>
                {data.media ? 
                    (data.media.reddit_video ?
                        (
                            <video>
                                <source src={data.media.reddit_video.dash_url} />
                                <source src={data.media.reddit_video.fallback_url} />
                                <source src={data.media.reddit_video.hls_url} />
                                <source src={data.media.reddit_video.scrubber_media_url} />
                            </video>
                        )
                        :   
                        (
                            <div  dangerouslySetInnerHTML={{__html: getIframe(data)}} />
                        )
                    )
                    :
                    data.url && <Img src={data.url} loading="lazy" />
                    
                }
                <div>Ups: {data.ups}</div>
                </Reddit>
            )}
        </_FeedContainer>
    )
}

export default React.memo(Feed)