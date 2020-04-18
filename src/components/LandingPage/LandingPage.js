import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'
import children from '../../img/IMGBIN_play-child-follow-the-leader-song-game-png_64H62UxU (1).png'

class App extends Component {

    render() {
        return (
            <div className="landing-page">
                <div className="img-container">
                    <div className="banner-title">Tallyho!</div>
                    <p className="description">~An accessible visual schedule for children~</p>
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
            </div>
        )
    }
}


export default App;