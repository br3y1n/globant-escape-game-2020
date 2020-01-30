import React from 'react'
import Navbar from './navigation/Navbar'
import logo from '../assets/images/logo-nav.png'
import styled from 'styled-components'

const Header = (props) => {
  const
    TagHeader = styled.header`
      width: 100%;
      height: 50px;
      position: fixed;
    `,
    links = [
      {
        name: 'First Challenge',
        route: '/firstChallenge'
      },
      {
        name: 'Second Challenge',
        route: '/SecondChallenge'
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
    <TagHeader>
      <Navbar logo={logo} links={links} theme={props.theme} />
    </TagHeader>
  )
}

export default Header