import React from 'react'
import styled, { withTheme } from 'styled-components'
import Navbar from './navbar'
import Content from './content'

const View = (props) => {

    const
        { fixed, theme } = props,
        headerH = '50px',

        Header = styled.header`
            width: 100%;
            height: ${headerH};
            position: fixed;
        `,

        Section = styled.section`
          background: ${theme.mainColors.secondary};
          width: 100%;
          height: calc(100% - ${headerH});
          padding-top: ${headerH};
        `

    return (
        <React.Fragment>
            <Header>
                <Navbar fixed={fixed} height={headerH} />
            </Header>
            <Section>
                <Content fixed={fixed} />
            </Section>
        </React.Fragment>
    )
}

export default withTheme(View)