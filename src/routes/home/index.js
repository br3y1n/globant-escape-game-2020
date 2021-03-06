import React from 'react'
import logo from '../../assets/images/logo.png'
import {H1, H2, Img, P} from '../../assets/themes/routerTags'

const Home = () => {
    return (
        <React.Fragment>
            <H1>welcome to </H1>
            <Img src={logo} />
            <H2>&raquo; Globant - Escape Game 2020</H2>
            <P>
                This is a page developed in React.js (beginner - first App) where we, the "<strong>Sky team</strong>", conformed by <strong>Brayan Arango</strong> and <strong>Sebastian Salgado</strong>, implemented a tool that facilitates the solution of the challenges proposed in the event Globant - Escape Game 2020.
            </P>
            <P>
                We invite you to try the tool and find the answers to the challenges with the help of it.
            </P>
        </React.Fragment>
    )
}
export default Home;

