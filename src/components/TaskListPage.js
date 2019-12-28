import React, { Component } from 'react'
import TallyhoApiService from '../services/tallyho-api-service'
import TaskItem from '../components/TaskListItem'

export default class TaskListPage extends Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        TallyhoApiService.getTasks()
            .then(response => {
                console.log(response)
                this.setState({
                    tasks: response
                })
            })
            .catch(error => {
                console.error({ error })
            })
    }


    renderTasks() {
        const tasks = this.state.tasks
        return tasks.map(task =>
            <TaskItem
                key={task.id}
                title={task.title}
                image={task.image}
            />
        )
    }

    render() {
        return (
            <section className='task=list-page'>
                {this.renderTasks()}
            </section>
        )
    }
}