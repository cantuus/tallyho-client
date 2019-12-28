import React, { Component } from 'react'
//import TallyhoApiService from '../services/tallyho-api-service'

export default class TaskListItem extends Component {
    render() {
        return ( 
            <section>
                <h3 className="task-title">{this.props.title}</h3>
                <img src={this.props.image} alt={`task of ${this.props.image}`} />
            </section>
        )
    }
}