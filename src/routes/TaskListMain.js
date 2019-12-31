import React, { Component } from 'react'
import TasklistPage from '../../src/components/TaskListPage'
import TokenService from '../../src/services/token-service'
import { Link } from 'react-router-dom'
import SideNavPage from '../routes/SideNavPage'
import EditModePage from '../components/EditModePage'

export default class TaskListMain extends Component {

    state = {
        tasks: [],
        editModeOn: false
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

    setEditMode = () => {
        this.setState({
            editModeOn: true
        })
    }


    //todo: going to add context



    render() {
        let renderListOrEdit;

        if (this.state.editModeOn) {

            renderListOrEdit = <EditModePage />
        }
        else {
            renderListOrEdit = <TasklistPage
                renderTasks={this.renderTasks}
                tasks={this.state.tasks}
                handleDeleteTask={this.handleDeleteTask}
            />
        }

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
                <SideNavPage
                    editModeOn={this.state.editModeOn}
                    setEditMode={this.setEditMode}
                />
                {renderListOrEdit}
            </div>
        )
    }
} 