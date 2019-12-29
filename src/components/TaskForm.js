import React, { Component } from 'react'
import config from '../config'
import TokenService from '../services/token-service'

export default class TaskForm extends Component {

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
        else if (taskImage.length < 6 || taskImage.length > 100) {
            return 'Task Image must between 6 and 100 characters long'
        }
    }

    handleTaskSubmit = () => {
        let taskTitle = this.state.taskTitle.value.trim();
        let taskImage = this.state.taskImage.value;

        let jsonObj = {
            title: taskTitle,
            image: taskImage
        }

        let request = JSON.stringify(jsonObj)

        fetch(`${config.API_ENDPOINT}/tasks`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: request,
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(event => Promise.reject(event))
                    : res.json()
            )
            .then(res =>
                console.log(res)
                //add Task
            )
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <div>
                <h1 className="task-form-title">Create Task</h1>
                <form className="task-form" onSubmit={() => this.handleTaskSubmit()}>
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
                </form>
            </div>
        )
    }

}