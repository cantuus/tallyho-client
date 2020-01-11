import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'
import children from '../../img/IMGBIN_play-child-follow-the-leader-song-game-png_64H62UxU (1).png'

class App extends Component {

    render() {
        return (
            <div className="landing-page">

                <h1 className="landing-page-header">Calling All Parents!</h1>
                <p className="description paragraph-one">Making a visual schedule for your child is time-consuming. Parents have places to go and chores to do within the day. Time is precious.
                       
                </p>
                <p className="description paragraph-two">With Tallyho!, parents will have their child's schedule easily accessible through their mobile device or at home on their personal computer without
                    the hassle. Simple and quick signup with just an email and password to start the day. Add multiple tasks with a title and image and you're on your way!</p>
                <p className="description paragraph-three">So put down that scissor and glue and let's tackle the day together!</p>
                <h2 className="slogan">TALLYHO!</h2>
                <img className="children-play" src={children} alt="children playing follow the leader"></img> 
                <section className="link-to-app">
                    <h3>
                        Get Started Here!
                </h3>
                    <p>
                        <Link to={`/register`} className="register-button">
                            Sign up
                        </Link>
                    </p>
                    <h3>
                        Been here already?
                </h3>
                    <p>
                        <Link to={`/login`} className="login-button">
                            Login
                        </Link>
                    </p>
                </section>
            </div>
        )
    }
}


export default App;