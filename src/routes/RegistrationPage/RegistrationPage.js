import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationPage.css'

export default class RegistrationPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleRegistrationSucess = user => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/login'
        history.push(destination)
    }

    render() {
        return (
            <section className='registration-page'>
                <h2 className="registration-header">Tallyho!</h2>
                <RegistrationForm
                    onRegisterSuccess={this.handleRegistrationSucess}
                />
            </section>
        )
    }
} 