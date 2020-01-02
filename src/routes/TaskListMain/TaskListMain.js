import React, { Component } from 'react'
import TasklistPage from '../../components/TaskListPage/TaskListPage'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import SideNavPage from '../SideNavPage'
import TaskForm from '../../components/TaskForm/TaskForm'
import TallyhoApiService from '../../services/tallyho-api-service'

export default class TaskListMain extends Component {

    state = {
        tasks: [],
        editModeOn: false,
        addModeOn: false
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
            editModeOn: !this.state.editModeOn
        })
    }

    setAddMode = () => {
        this.setState({
            addModeOn: !this.state.addModeOn
        })
    }

    addTaskSuccess = () => {
        this.setState({
            editModeOn: false,
            addModeOn: false
        })
    }


    handleClickToggle = (task) => {
        let newTask = task;
        newTask.checked = !newTask.checked;

        TallyhoApiService.updateTask(newTask, newTask.id)
            .then(() => {
                let updatedTasks = this.state.tasks.map(task => {
                    if (task.id === newTask.id) {
                        task.checked = newTask.checked
                    }
                    return task
                })
                this.setState({
                    tasks: updatedTasks
                })
            })
            .catch(error => {
                console.error({ error })
            })
    }


    //todo: going to add context



    render() {
        let renderPage;

        if (this.state.addModeOn) {

            renderPage = <TaskForm
                addTaskSuccess={this.addTaskSuccess} />
        }
        else {
            renderPage = <TasklistPage
                renderTasks={this.renderTasks}
                tasks={this.state.tasks}
                handleDeleteTask={this.handleDeleteTask}
                handleClickToggle={this.handleClickToggle}
                editModeOn={this.state.editModeOn}
                addTaskSuccess={this.addTaskSuccess}
            />
        }

        return (
            <div>
                <nav role="navigation" className="nav">
                    <div className="tallyho-header">
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
                    setAddMode={this.setAddMode}
                    addModeOn={this.state.addModeOn}
                />
                {renderPage}
            </div>
        )
    }
} 