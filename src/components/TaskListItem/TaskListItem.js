import React, { Component } from 'react'
import TallyhoApiService from '../../services/tallyho-api-service'

export default class TaskListItem extends Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    state = {
        checked: this.props.task.checked,
        image: this.props.task.image
    }

    handleClickDelete = () => {
        const taskId = this.props.task.id;
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
            .then(() => {
                this.setState({
                    checked: !this.state.checked
                })
            })
            .catch(error => {
                console.error({ error })
            })
    }

    changeImage = () => {
        let imageUrl;

        if (this.state.checked) {
             imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-kMbFqjiAXzJ3W9-ODBgavLSogiAblyrWMF5ia7HfQBAt3Qy&s'
        }
        else {
            imageUrl = this.props.task.image;
        }

        return imageUrl
    }


    render() {
        return (
            <section>
                <h3 className="task-title">{this.props.task.title}</h3>
                <img onClick={this.handleClickToggle} src={this.changeImage()} alt={`task of ${this.props.task.image}`} />
                <button onClick={() => this.handleClickDelete()}>Delete</button>
            </section>
        )
    }
}

//src=use a terniary to render image based on the checked value
