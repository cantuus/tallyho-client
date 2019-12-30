import React, { Component } from 'react'
import TallyhoApiService from '../services/tallyho-api-service'

export default class TaskListItem extends Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this)
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


    render() {
        return (
            <section>
                <h3 className="task-title">{this.props.title}</h3>
                <img src={this.props.image} alt={`task of ${this.props.image}`} />
                <button onClick={this.handleClickDelete}>Delete</button>
            </section>
        )
    }
}