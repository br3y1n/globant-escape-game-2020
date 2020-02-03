import React from 'react'
import styled, { withTheme, css } from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo-nav.png'

const Navbar = (props) => {

  const
    { fixed, theme } = props,
    { mainColors, fonts, textColors } = theme,

    Nav = styled.nav`
      display: flex;
      justify-content: space-between;
      background: ${mainColors.primary};
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
      font-family: ${fonts.secondary};
      font-size: 13px;
      color: ${textColors.nav};

      ${props => props.fixed === props.to && css`
        background: ${mainColors.secondary};
        color: ${mainColors.primary};
      `
      }

      ${props => props.fixed !== props.to && css`
        &:hover{
          background: rgb(0, 0, 0, 0.1);
          color: ${mainColors.secondary};
        }`
      }
    `,

    Img = styled.img`
      width: auto;
      height: 80%;

      &:hover{
        height: 82%;
      }
    `,

    links = [
      {
        name: 'First Challenge',
        route: '/firstChallenge'
      },
      {
        name: 'Second Challenge',
        route: '/secondChallenge'
      },
      {
        name: 'Third Challenge',
        route: '/thirdChallenge'
      }
      ,
      {
        name: 'Fourth Challenge',
        route: '/fourthChallenge'
      }
    ]


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
            fixed={fixed}
            key={idx}
            to={link.route}>
            {link.name}
          </StyledLink>
        )}
      </Div>
    </Nav>

  )
}

export default withTheme(Navbar)