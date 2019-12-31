import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SideNavPage extends Component {

    render() {
        let renderSideNav;

        if (this.props.editModeOn) {

            renderSideNav =
                <div className="side-page-nav">
                    <button onClick={this.props.setEditMode} className="save-button">
                        Back
                    </button>
                </div>;
        }

        else {
            renderSideNav =
                <div className="side-page-nav">
                    <button className="add-task-link">
                        <Link to={`/add-task`}>
                            Add
                        </Link>
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