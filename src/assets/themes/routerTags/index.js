import styled from 'styled-components'
import { theme } from '../theme'
import { devices } from '../../../assets/devices'

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

    H3 = styled.h3`
        font-family: ${fonts.secondary};
        font-size: ${fontSizes.subtitle};
        padding: 10px 0px;
        text-align: center;
    `,

    H4 = styled.h4`
        font-family: ${fonts.secondary};
        font-size: ${fontSizes.paragraph};
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
    `,

    ButtonSuccess = styled.div`
        padding: 10px;
        background: ${buttonColors.success.normal};
        border-radius: 10px;
        width: 150px;
        margin: 10px auto;
        font-family: ${fonts.secondary};
        font-size: ${fontSizes.paragraph};
        color: ${textColors.nav};
        cursor: pointer;

        &:hover{
            background: ${buttonColors.success.hover};
        }

        &:active{
            background: ${buttonColors.success.active};
        }
    `,

    Label = styled.label`
        display: block;
        font-family: ${fonts.tertiary};
        font-size: ${fontSizes.paragraph};
        padding: 10px 10px;
    `,

    Input = styled.input`
        display: block;
        font-family: ${fonts.tertiary};
        font-size: ${fontSizes.paragraph};
        width: 80%;
        margin: 0px auto;
    `,

    DivForm = styled.div`
        width: 75%;
        border: 2px solid ${textColors.nav};
        margin: 0px auto;
        border-radius: 10px;
        padding-bottom: 30px;

        @media ${devices.tablet} {
         width: 85%;
        }
    `,

    Ul = styled.ul`
        padding-inline-start: 30px;
    `,

    Li = styled.li`
        font-family: ${fonts.tertiary};
        font-size: ${fontSizes.paragraph};
        text-align: left;
    `
