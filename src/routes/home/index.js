import React from 'react'
import styled, { withTheme } from 'styled-components'
import logo from '../../assets/images/logo.png'

const Home = (props) => {

    const
        { fonts, fontSizes } = props.theme,

        Img = styled.img`
            width: 250px;
            height: auto;
        `,

        H1 = styled.h1`
            font-family: ${fonts.primary};
            font-size: ${fontSizes.title};
            padding: 20px;
        `,

        H2 = styled.h2`
            font-family: ${fonts.secondary};
            font-size: ${fontSizes.subtitle};
            padding: 20px 0px;
            text-align: left;
        `,

        P = styled.p`
            font-family: ${fonts.tertiary};
            text-align: justify;
            text-justify: inter-word;
            line-height: 25px;
            font-size: ${fontSizes.paragraph};
        `

    return (
        <React.Fragment>
            <H1>welcome to </H1>
            <Img src={logo} />
            <H2>&raquo; Globant - Escape Game 2020</H2>
            <P>
                This is a page where we, the "<strong>Sky team</strong>", conformed by <strong>Brayan Arango</strong> and <strong>Sebastian Salgado</strong>, developed a tool that facilitates the solution of the challenges proposed in the event Globant - Escape Game 2020.
            </P>
            <br />
            <P>
                We invite you to try the tools and find the answers to the challenges with the help of these.
            </P>
        </React.Fragment>
    )
}
export default withTheme(Home);

