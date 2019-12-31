import React, { Component } from 'react'
import TallyhoApiService from '../services/tallyho-api-service'

export default class TaskListItem extends Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    state = {
        checked: this.props.checked
    }

    handleClickDelete = event => {
        event.preventDefault();
        const taskId = this.props.taskId;
        const thisProps = this.props;
        console.log(thisProps);

        TallyhoApiService.getTaskToDelete(taskId)
            .then(() => {
                this.props.handleDeleteTask(taskId)
            })
            .catch(error => {
                console.error({ error })
            })


    }

    handleClickToggle = () => {
        let newTask = this.props.task;
        newTask.checked = !newTask.checked;
    
        TallyhoApiService.updateTask(newTask, newTask.id)
            .then(res => {
                console.log(res);
                // this.setState({
                    
                // })
            })
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        return (
            <section>
                <h3 className="task-title">{this.props.task.title}</h3>
                <img onClick={this.handleClickToggle} src={this.props.task.image} alt={`task of ${this.props.task.image}`} />
                <button onClick={() => this.handleClickDelete()}>Delete</button>
            </section>
        )
    }
}