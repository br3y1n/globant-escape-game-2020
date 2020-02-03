import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './assets/themes/theme'
import View from './components/view/'
import './assets/css/style.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path='/home' ><View fixed='/home' /></Route>
        <Route exact path='/firstChallenge' ><View fixed='/firstChallenge' /></Route>
        <Route exact path='/SecondChallenge' ><View fixed='/secondChallenge' /></Route>
        <Route exact path='/thirdChallenge' ><View fixed='/thirdChallenge' /></Route>
        <Route exact path='/fourthChallenge' ><View fixed='/fourthChallenge' /></Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider >,
  document.getElementById('root'));