import React, { Component } from 'react'
import TasklistPage from '../../src/components/TaskListPage'
import TokenService from '../../src/services/token-service'
import { Link } from 'react-router-dom'

export default class TaskListMain extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }


    render() {
        return (
            <div>
                <nav role="navigation">
                    <div className="tallyho-logo">
                        <h1>Tallyho!</h1>
                    </div>
                    <div className='nav-logged-in'>
                        <Link
                            onClick={this.handleLogoutClick}
                            to='/login'>
                            Logout
                    </Link>
                    </div>
                </nav>
                <TasklistPage />
            </div>
        )
    }
}