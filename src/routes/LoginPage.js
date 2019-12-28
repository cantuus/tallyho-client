import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/tasks'
        history.push(destination)
    }

    render() {
        return (
            <section className="LoginPage">
                <h2>Tallyho!</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}