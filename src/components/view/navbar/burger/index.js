import React from 'react'
import styled, { withTheme } from 'styled-components'
import { devices } from '../../../../assets/devices'

const Burger = (props) => {

  const
    { textColors } = props.theme,

    Line = styled.div`
      width: 30px;
      height: 4px;
      background: ${textColors.nav};
      border-radius: 35%;
    `,

    Div = styled.div`
      display: none;

      @media ${devices.tablet} {
        margin: 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 24px;
        cursor: pointer;
      }
    `
  return (
    <Div onClick={props.clickBurger}>
      <Line />
      <Line />
      <Line />
    </Div>
  )
}

export default withTheme(Burger)