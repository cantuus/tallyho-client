import React, { Component } from 'react'
import TasklistPage from '../../src/components/TaskListPage'
import TokenService from '../../src/services/token-service'
import { Link } from 'react-router-dom'
import SideNavPage from '../routes/SideNavPage'

export default class TaskListMain extends Component {

    state = {
        tasks: [],
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderTasks = response => {
        this.setState({
            tasks: response
        })
    }

    handleDeleteTask = taskId => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== taskId)
        });
    };


    //todo: going to add context



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
                <SideNavPage />
                <TasklistPage
                    renderTasks={this.renderTasks}
                    tasks={this.state.tasks}
                    handleDeleteTask={this.handleDeleteTask}
                />
            </div>
        )
    }
}