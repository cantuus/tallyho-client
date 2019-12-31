import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SideNavPage extends Component {

    render() {
        let renderSideNav;

        if (this.props.editModeOn) {

            renderSideNav =
                <div className="side-page-nav">
                    <button onClick={this.props.setEditMode} className="back-button">
                        Back
                    </button>
                </div>;
        }

        else if (this.props.addModeOn) {

            renderSideNav =
                <div className="side-page-nav">
                    <button onClick={this.props.setAddMode} className="back-button">
                        Back
                    </button>
                </div>;
        }

        else {
            renderSideNav =
                <div className="side-page-nav">
                    <button onClick={this.props.setAddMode} className="add-task-link">
                        Add
                    </button>
                    <button onClick={this.props.setEditMode} className="edit-task-link">
                        Edit
                    </button>
                </div>
        }
        return (
            <div>
                {renderSideNav}
            </div>
        )
    }
}