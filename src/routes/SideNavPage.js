import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SideNavPage extends Component {


    render() {
        return (
            <div className="side-page-nav">
                <p className="add-task-link">
                    <Link to={`/add-task`}>
                        Add
                        </Link>
                </p>
                <p className="edit-task-link">
                    <Link to={`/edit-task`}>
                        Edit
                        </Link>
                </p>
            </div>
        )
    }
}