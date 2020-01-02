import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import LoginPage from '../src/routes/LoginPage'
import RegistrationPage from '../src/routes/RegistrationPage'
import TaskListMain from './routes/TaskListMain/TaskListMain'
import './App.css';
import PrivateRoute from '../src/Utils/PrivateRoute'
import PublicRoute from '../src/Utils/PublicOnlyRoute'
import LandingPage from '../src/components/LandingPage/LandingPage'
import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <PublicRoute path='/' exact component={LandingPage} />
            <PublicRoute path='/login' exact component={LoginPage} />
            <PublicRoute path='/register' exact component={RegistrationPage} />
            <PrivateRoute path='/tasks' component={TaskListMain} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;
