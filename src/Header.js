import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderWrapper = styled.div`
    display: flex;
    height: ${props => props.centerNav ? '100vh' : 'initial'};
    align-items: center;
    justify-content: ${props => props.centerNav ? 'center' : 'initial'};
    background-color: #32a8ff;  
    flex: 1;
    width: 100%;
`

const _Header = styled.div`
    width: 300px;
    padding: ${props => props.centerNav ? "0" : "20px 10px"};
`

const _SelectedSubreddit = styled.div`
    color: white;
    font-size: 24px;
`

const Header = () => {

    const selectedSubreddit = useSelector(state => state.subreddit);

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        if(selectedSubreddit) {
            setShowNav(false);
        }
    }, [selectedSubreddit])

    return (
        <HeaderWrapper centerNav={!selectedSubreddit}>
            <_Header centerNav={!selectedSubreddit}>
                {selectedSubreddit && <_SelectedSubreddit onClick={() => setShowNav(true)}>{selectedSubreddit.display}</_SelectedSubreddit>}
                <Navigation center={!selectedSubreddit} show={showNav}></Navigation>
            </_Header>
        </HeaderWrapper>
    )
}

export default Header