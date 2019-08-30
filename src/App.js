import React from 'react'
import store from './store';
import { Provider } from 'react-redux';
import Feed from './Feed';
import Header from './Header';

import styled from 'styled-components'

const _AppContainer = styled.div`
    @media(min-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
`

const App = () => {
    return (
        <Provider store={store}>
            <_AppContainer>
                <Header />
                <Feed />
            </_AppContainer>
        </Provider>
    )
}

export default App;