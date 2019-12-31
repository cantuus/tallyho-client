import React, { Component } from 'react'
import TallyhoApiService from '../services/tallyho-api-service'
import TaskItem from '../components/TaskListItem'

export default class TaskListPage extends Component {

    componentDidMount() {
        TallyhoApiService.getTasks()
            .then(response => {
                this.props.renderTasks(response)
            })
            .catch(error => {
                console.error({ error })
            })
    }


    renderTasks() {
        const tasks = this.props.tasks
        console.log(tasks)
        return tasks.map(task =>
            <TaskItem
                key={task.id}
                task={task}
                handleDeleteTask={this.props.handleDeleteTask}
                handleToggleChecked={this.props.handleToggleChecked}
                setToggleTask={this.props.setToggleTask}
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