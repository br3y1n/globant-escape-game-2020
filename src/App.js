import React from 'react';
import Header from './components/Header'
import Content from './components/Content'

const theme = {
  primary: '#4f4f4f',
  secondary: '#7c7c7c'
}

const App = () => (
  <React.Fragment>
    <Header theme={theme} />
    <Content theme={theme} />
  </React.Fragment>

)

export default App
