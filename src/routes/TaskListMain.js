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

    // handleToggleChecked = (taskId) => {
    //     const tasks = this.state.tasks;
    //     const foundTask = tasks.find(task => task.id === taskId);
    //     const toggleTask = foundTask.checked = true;

    //     if(toggleTask) {
    //         this.setState({
    //             tasks:  
    //         })
    //     }


    // }

    // handleImageToggle = (func) => {
    //     this.setState({
    //         tasks: task
    //     })
    // }

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
                    handleToggleChecked={this.handleToggleChecked}
                    setToggleTask={this.setToggledTask}
                />
            </div>
        )
    }
}