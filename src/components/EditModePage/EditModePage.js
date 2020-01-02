import React, { Component } from 'react'
import TallyhoApiService from '../../services/tallyho-api-service'

export default class EditForm extends Component {

    state = {
        taskTitle: { value: '', touched: false },
        taskImage: { value: '', touched: false },
    }

    setTaskTitle = taskTitle => {
        this.setState({ taskTitle: { value: taskTitle, touched: true } });
    }

    setTaskImage = taskImage => {
        this.setState({ taskImage: { value: taskImage, touched: true } });
    }

    validateTaskTitle = () => {
        let taskTitle = this.state.taskTitle.value.trim();
        if (taskTitle === 0) {
            return "Task Title is required"
        }
        else if (taskTitle.length < 1 || taskTitle.length > 12) {
            return 'Task Title must between 1 and 12 characters long'
        }
    }

    validateTaskImage = () => {
        let taskImage = this.state.taskImage.value.trim();
        if (taskImage === 0) {
            return "Task Image is required"
        }
        else if (taskImage.length < 6) {
            return 'Task Image must larger than 6 characters'
        }
        else if (!taskImage.includes('https://')) {
            return `Task Image must be a Url starting with 'https://'`
        }
    }

    handleTaskEditSubmit = (event) => {
        event.preventDefault();
        //const taskId = 
        let taskTitle = this.state.taskTitle.value.trim();
        let taskImage = this.state.taskImage.value;
        //const task

        TallyhoApiService.postTask(taskTitle, taskImage)
            .then(res => {
                this.props.addTaskSuccess()
            })
            .catch(error => {
                console.error({ error });
            })
    }

    render() {
        let renderEditField;
        let tasks = this.props.tasks
        let task = tasks.map(task => {
            renderEditField = <form className="task-form" onSubmit={this.handleTaskEditSubmit}>
                <label htmlFor="task-title">Edit Title
        {this.state.taskTitle.touched &&
                        <p className="error">{this.validateTaskTitle()}</p>}
                </label>
                <input id="task-title" type="text" value={task.title}
                    onChange={e => this.setTaskTitle(e.target.value)} />

                <label htmlFor="task-image">Edit Image
        {this.state.taskImage.touched &&
                        <p className="error">{this.validateTaskImage()}</p>}
                </label>
                <input id="task-image" type="text" value={task.image}
                    onChange={e => this.setTaskImage(e.target.value)} />

                <button disabled={
                    this.validateTaskTitle() ||
                    this.validateTaskImage()
                }>Save</button>
            </form>
        })
        return (
            <div>
                <h1 className="task-form-title">Edit Task</h1>
                {/* <form className="task-form" onSubmit={this.handleTaskSubmit}>
                    <label htmlFor="task-title">Add Title
                {this.state.taskTitle.touched &&
                            <p className="error">{this.validateTaskTitle()}</p>}
                    </label>
                    <input id="task-title" type="text" value={this.state.taskTitle.value}
                        onChange={e => this.setTaskTitle(e.target.value)} />

                    <label htmlFor="task-image">Add Image
                {this.state.taskImage.touched &&
                            <p className="error">{this.validateTaskImage()}</p>}
                    </label>
                    <input id="task-image" type="text" value={this.state.taskImage.value}
                        onChange={e => this.setTaskImage(e.target.value)} />

                    <button disabled={
                        this.validateTaskTitle() ||
                        this.validateTaskImage()
                    }>Add Task</button>
                </form> */}
                { renderEditField }
            </div>
        )
    }

}