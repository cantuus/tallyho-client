import React, { Component } from 'react'
import TallyhoApiService from '../../services/tallyho-api-service'

export default class EditForm extends Component {
    constructor(props) {
        super(props)
        this.setTaskTitle = this.setTaskTitle.bind(this);
    }

    state = {
        taskTitle: { value: this.props.task.title, touched: false },
        taskImage: { value: this.props.task.image, touched: false },
        //TODO: state - { tasktitle:..}
    }


    //todo: state to determine if it's been changed or not

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

    handleTaskSave = (event) => {
        event.preventDefault();
        let taskTitle = this.state.taskTitle.value.trim();
        let taskImage = this.state.taskImage.value;

        let newTask = {
            id: this.props.task.id,
            title: taskTitle,
            image: taskImage
        }

        TallyhoApiService.updateTask(newTask, this.props.task.id)
            .then(() => {
                this.props.saveTaskSucess();
            })
            .catch(error => {
                console.error({ error });
            })
    }

    render() {
        return (
            <div>
                <form className="task-form" onSubmit={this.handleTaskSave}>
                    <label htmlFor="task-title">Add Title
                        {this.state.taskTitle.touched && <p className="error">{this.validateTaskTitle()}</p>}
                    </label>
                    <input type="text" value={this.state.taskTitle.value} onChange={(e) => {
                        console.log();
                        this.setTaskTitle(e.currentTarget.value);
                    }} />
                    <label htmlFor="task-image">Add Image
                        {this.state.taskImage.touched && <p className="error">{this.validateTaskImage()}</p>}
                    </label>
                    <input type="text" value={this.state.taskImage.value} onChange={e => this.setTaskImage(e.target.value)} />
                    <button disabled={
                        this.validateTaskTitle() ||
                        this.validateTaskImage()
                    }>Save </button>
                </form>
            </div>
        )
    }

    //TODO: get the value when the submit is run rather than using an ONCHANGE

}