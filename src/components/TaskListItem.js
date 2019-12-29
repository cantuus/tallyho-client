import React, { Component } from 'react'
import TallyhoApiService from '../services/tallyho-api-service'

export default class TaskListItem extends Component {


    handleClickDelete = event => {
        event.preventDefault()
        const taskId = this.props.id

        TallyhoApiService.getTaskToDelete()
            .then( response => {
                console.log(response)
                //delete function
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