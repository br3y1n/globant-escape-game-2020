import React from 'react'
import styled, { withTheme } from 'styled-components'
import Home from '../../../routes/home'
import First from '../../../routes/firstChallenge'
import Second from '../../../routes/secondChallenge'
import Third from '../../../routes/thirdChallenge'
import Fourth from '../../../routes/fourthChallenge'
import {devices} from '../../../assets/devices'

const Content = (props) => {

    const
        _showContent = (fixed) => {

            switch (fixed) {

                case '/firstChallenge':
                    return <First />

                case '/secondChallenge':
                    return <Second />

                case '/thirdChallenge':
                    return <Third />

                case '/fourthChallenge':
                    return <Fourth />

                default:
                    return <Home />
            }

        },

        Scroll = styled.div`
            width: 100%;
            height: 100%;
            overflow: auto;
        `,

        Div = styled.div`
            width: 50%;
            height: auto;
            margin: 20px auto;
            justify-content: center;
            text-align: center;
            align-items: center;
            color: ${props.theme.textColors.content};

           @media ${devices.tablet}{
               width: 80%
           } 
        `

    return (
        <Scroll>
            <Div>
                {_showContent(props.fixed)}
            </Div>
        </Scroll>
    )
}

export default withTheme(Content)