import React, { Component } from 'react'
import RegistrationForm from '../../src/components/RegistrationForm'

export default class RegistrationPage extends Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleRegistrationSucess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <section className='registration-page'>
                <h2>Tallyho!</h2>
                <RegistrationForm
                    onRegisterSuccess={this.handleRegistrationSucess}
                />
            </section>
        )
    }
} 