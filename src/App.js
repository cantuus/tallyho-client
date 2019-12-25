import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import config from '../config'
import LoginPage from '../src/routes/LoginPage'

import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Route path='/login' exact component={LoginPage} />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
