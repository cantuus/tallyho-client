import React, { Component } from 'react'
import TallyhoApiService from '../../services/tallyho-api-service'
import checkmark from '../../img/kisspng-check-mark-checkbox-computer-icons-resort-green-tick-icon-5ab0e1fcefaf89.1310283315215416289818.png'
import './TaskListItem.css'

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
            imageUrl = checkmark;
        }
        else {
            imageUrl = this.props.task.image;
        }

        return imageUrl
    }

    changeImageClass = () => {
        let imageClass;

        if (this.props.task.checked) {
            imageClass = "task-image-checked";
        }
        else {
            imageClass = "task-image";
        }

        return imageClass
    }

    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-kMbFqjiAXzJ3W9-ODBgavLSogiAblyrWMF5ia7HfQBAt3Qy&s

    render() {
        return (
            <section className="task-item">
                <h3 className="task-title">{this.props.task.title}</h3>
                <img className={this.changeImageClass()} onClick={() => this.props.handleClickToggle(this.props.task)} src={this.changeImage()} alt={`task of ${this.props.task.image}`} />
                <div className="task-delete" onClick={() => this.handleClickDelete()}><i class="fas fa-trash-alt"></i></div>
            </section>
        )
    }
}

//src=use a terniary to render image based on the checked value
