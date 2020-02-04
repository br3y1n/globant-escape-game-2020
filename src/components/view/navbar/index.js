import React, { Component } from 'react'
import styled, { withTheme, css } from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo-nav.png'
import Burger from './burger'
import { devices } from '../../../assets/devices'

class Navbar extends Component {

  state = {
    drawerOpen: false,
  }

  _toggleDrawer = () => {
    this.setState((prevState) => {
      return { drawerOpen: !prevState.drawerOpen }
    })
  }

  render() {
    const
      { fixed, theme, height } = this.props,
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
        `}

        ${props => props.fixed !== props.to && css`
          &:hover{
            background: rgb(0, 0, 0, 0.1);
            color: ${mainColors.secondary};
          }
        `}

        @media ${devices.tablet} {
         width: calc(100% - 20px);
        }
      `,

      Img = styled.img`
        width: auto;
        height: 80%;

        &:hover{
          height: 82%;
        }
      `,

      Ul = styled.ul`
        display: flex;
        height: 100%;
        width: auto;

        @media ${devices.tablet} {
         display: ${this.state.drawerOpen ? 'flex' : 'none'};
         flex-direction: column;
         position: absolute;
         right: 0px;
         top: ${height};
         width: 100%;
         height: auto;
         background: ${mainColors.primary};
         justify-content: space-between;
         border-top: 2px solid rgb(0, 0, 0, 0.3)
        }
      `,

      Li = styled.li`
        list-style: none;

        @media ${devices.tablet} {
          height: 30px;
          width: 100%;
          border-bottom: 2px solid rgb(0,0,0, 0.3);
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
          <Ul>
            {links.map((link, idx) =>
              <Li key={idx}>
                <StyledLink
                  fixed={fixed}
                  to={link.route}>
                  {link.name}
                </StyledLink>
              </Li>
            )}
          </Ul>
          <Burger clickBurger={this._toggleDrawer} />
        </Div>
      </Nav>

    )

  }
}

export default withTheme(Navbar)