import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const
    Nav = styled.nav`
      display: flex;
      justify-content: space-between;
      background: ${props.theme.primary};
      color: white;
      width: 100%;
      height: 100%;
    `,
    Div = styled.div`
      display: inline-flex;
      align-items: center;
      height: 100%;
      width: auto;
    `,
    StyledLink = styled(Link)`
      display: inline-flex;
      align-items: center;
      padding: 0 10px;
      height: 100%;
      text-decoration: none;
      color: white;

      &:hover{
        background: ${props.theme.secondary};
        color: yellow;
      }
    `,
    Img = styled.img`
      width: auto;
      height: 80%;

      &:hover{
        height: 82%;
      }
    `,
    { logo, links } = props

  return (
    <Nav>
      <Div>
        <StyledLink to={'/home'}>
          <Img src={logo} />
        </StyledLink>
      </Div>
      <Div>
        {links.map((link, idx) =>
          <StyledLink
            key={idx}
            to={link.route}>
            {link.name}
          </StyledLink>
        )}
      </Div>
    </Nav>

  )
}

export default Navbar