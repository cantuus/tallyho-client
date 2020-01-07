import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <div className="landing-page">

                <h1 className="landing-page-header">Calling All Parents!</h1>
                <p className="attention-grabber">Making a visual schedule for your child is time-consuming. Parents have places to go and do within the day. Time is precious.
                    With this application, parents will have their child's schedule on the go on their mobile devices or at home on their personal computer to create a visual schedule without
                    the hassle. So put down that scissor and glue and let's tackle the day together! TALLY-HO!
                </p>
                <section className="step-one">
                    <h3>1. Sign up/Login</h3>
                    <p>Provide an email and password</p>
                    <img></img>
                </section>
                <section className="step-two">
                    <h3>2. Create a new task</h3>
                    <p>Note: To add an image, use the Google Image search engine to select an image. </p>
                    <img></img>
                    <p>Right Click on the chosen image and click on 'Copy Image Address'</p>
                    <img></img>
                    <p>Now paste into the 'Add Image' field</p>
                </section>
                <section className="step-three">
                    <h3>3. Check off a Task</h3>
                    <p>Check off a Task by tapping/clicking the image</p>
                    <img></img>
                </section>
                <section className="step-four">
                    <h3>4. Edit Multiple Tasks</h3>
                    <p>In edit mode, you can edit multiple tasks and save each of them</p>
                    <img></img>
                </section>
                <section className="link-to-app">
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
                </section>
            </div>
        )
    }
}


export default App;