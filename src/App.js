import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import config from '../src/config'
import LoginPage from '../src/routes/LoginPage'
import RegistrationPage from '../src/routes/RegistrationPage'
import TaskListMain from '../src/routes/TaskListMain'
import TaskForm from '../src/components/TaskForm'
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Route path='/login' exact component={LoginPage} />
          <Route path='/register' exact component={RegistrationPage} />
          <Route path='/tasks' component={TaskListMain} />
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
