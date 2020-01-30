import React from 'react'
import styled from 'styled-components'

const Content = (props) => {
  const Section = styled.section`
          background: ${props.theme.secondary};
          color: white;
          width: 100%;
          height: calc(100% - 50px);
          padding-top: 50px;
        `

  return (
    <Section>
      <h1>Hola</h1>
    </Section>


  )
}

export default Content