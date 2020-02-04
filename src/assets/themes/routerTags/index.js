import styled from 'styled-components'
import {theme} from '../theme'

const
    { fonts, fontSizes } = theme

export const
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
