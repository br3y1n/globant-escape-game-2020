import styled from 'styled-components'
import { theme } from '../theme'

const
    { fonts, fontSizes, buttonColors, textColors } = theme

export const
    Img = styled.img`
        width: 250px;
        height: auto;
        margin: 10px 0px; 
    `,

    H1 = styled.h1`
        font-family: ${fonts.primary};
        font-size: ${fontSizes.title};
        padding: 20px;
    `,

    H2 = styled.h2`
        font-family: ${fonts.secondary};
        font-size: ${fontSizes.subtitle};
        padding: 10px 0px;
        text-align: left;
    `,

    P = styled.p`
        word-wrap: break-word;
        font-family: ${fonts.tertiary};
        text-align: justify;
        text-justify: inter-word;
        line-height: 25px;
        font-size: ${fontSizes.paragraph};
        padding: 10px 0px;
    `,

    ButtonTest = styled.div`
        padding: 10px;
        background: ${buttonColors.test.normal};
        border-radius: 10px;
        width: 150px;
        margin: 10px auto;
        font-family: ${fonts.secondary};
        font-size: ${fontSizes.paragraph};
        color: ${textColors.nav};
        cursor: pointer;

        &:hover{
            background: ${buttonColors.test.hover};
        }

        &:active{
            background: ${buttonColors.test.active};
        }
    `
