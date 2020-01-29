import React from 'react'
import styled from 'styled-components'

const Navbar = (props) => {
  const
    Nav = styled.nav`
      display: flex;
      flex-flow: row nowwrap;
      justify-content: space-evenly;
      align-items: center;
      background: ${props.theme.primary};
      color: white;
      width: 100%;
      height: 100%;
    `,
    Img = styled.img`
      width: auto;
      height: 80%;
    `,
    { logo, links } = props

  return (
    <Nav>
      <Img src={logo} />
    </Nav>

  )
}

export default Navbar