import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class SideNavPage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }

    render() {
        let renderSideNav;

        if (this.props.editModeOn) {

            renderSideNav =
                <div className="side-page-nav">
                    <button className="save-button">
                        Save
            </button>
                </div>;
        }

        else {
            renderSideNav =
                <div className="side-page-nav">
                    <p className="add-task-link">
                        <Link to={`/add-task`}>
                            Add
                    </Link>
                    </p>
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