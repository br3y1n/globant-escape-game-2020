import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'

const theme = {
  primary: '#7c7c7c',
  secondary: '#d8d8d8'
}

const App = () => (
  <React.Fragment>
    <Header theme={theme} />
    <Switch>
      <Route exact path='/home' render={(props) => <Content {...props} theme={theme} />} />
    </Switch>
  </React.Fragment>

)

export default App
