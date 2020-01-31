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
      text-align: center;
      padding: 0 10px;
      height: 100%;
      text-decoration: none;
      color: white;
      font-family: 'Montserrat-SemiBold';
      font-size: 13px;

      &:hover{
        background: rgb(0, 0, 0, 0.1);
        color: ${props.theme.secondary};
        text-shadow: 1px 2px black
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