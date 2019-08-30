import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import supportedSubreddits from './supported_subreddits'
import { selectSubreddit } from './actions';
import styled from 'styled-components'

const NavLink = styled.div`
    cursor: pointer;
    padding: 10px 6px;
    border-bottom: solid thin rgba(0, 0, 0, 0.2);
    opacity: 0.75;
    :hover{
        opacity: 0.85;
        background-color: rgba(0, 0, 0, 0.02);
    }
    
`

const NavLinks = styled.div`
    background-color: #32a8ff;
    color: white;
    position: ${props => props.center ? 'initial' : 'absolute'};
    display: ${props => props.show || props.center ?  'block' : 'none'};
    text-align: ${props => props.center ? 'center': 'initial'};
    width: inherit;
    left: 0;
    top: 68px;
`

const Navigation = ({show, center}) => {
    const dispatch = useDispatch()

    const selectedSubreddit = useSelector(state => state.subreddit)
    
    return (

        <NavLinks show={show} center={center}>
            {supportedSubreddits.map(subreddit => 
                <NavLink key={subreddit.id} onClick={() => dispatch(selectSubreddit(subreddit))}>{subreddit.display}</NavLink>
            )}
        </NavLinks>
    )
}

export default Navigation;