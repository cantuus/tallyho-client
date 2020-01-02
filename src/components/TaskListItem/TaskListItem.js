import React, { Component } from 'react'
import TallyhoApiService from '../../services/tallyho-api-service'

export default class TaskListItem extends Component {
    constructor(props) {
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this)
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

    changeImage = () => {
        let imageUrl;

        let passProps = this.props;
        console.log('this is passprops ', passProps)

        if (this.props.task.checked) {
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
                <img onClick={() => this.props.handleClickToggle(this.props.task)} src={this.changeImage()} alt={`task of ${this.props.task.image}`} />
                <button onClick={() => this.handleClickDelete()}>Delete</button>
            </section>
        )
    }
}

//src=use a terniary to render image based on the checked value
