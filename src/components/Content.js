import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.png'

const Content = (props) => {
  const Section = styled.section`
          background: ${props.theme.secondary};
          justify-content: center;
          color: black;
          width: 100%;
          height: calc(100% - 50px);
          padding-top: 50px;
        `

  return (
    <Section>
      <div style={{ width: '50%', height: 'auto', padding: '50px 50px' }}>
        <img src={logo} style={{ width: '100%', height: 'auto' }} />
      </div>
    </Section>


  )
}

export default Content