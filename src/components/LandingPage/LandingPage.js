import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Welcome Parents!</h1>
                <p>Making a visual schedule for your child is time-consuming. Parents have places to go and do within the day. Time is precious.
                    With this application, parents will have their child's schedule on the go on their mobile devices or at home on their personal commputer to create a visual schedule without
                    the hassle. So put down that scissor and glue and let's tackle the day together! TALLY-HO!
                </p>
                <h3>
                    Get Started Here!
                </h3>
                <p>
                    <Link to={`/register`}>
                        Sign up
                        </Link>
                </p>
                <h3>
                    Been here already?
                </h3>
                <p>
                    <Link to={`/login`}>
                        Login
                        </Link>
                </p>
            </div>
        )
    }
}


export default App;