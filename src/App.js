import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import config from '../src/config'
import LoginPage from '../src/routes/LoginPage'
import RegistrationPage from '../src/routes/RegistrationPage'
import TaskListMain from './routes/TaskListMain/TaskListMain'
import TaskForm from './components/TaskForm/TaskForm'
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
