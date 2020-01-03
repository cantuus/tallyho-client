import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => { }
    }

    state = { error: null }

    handleSubmit = event => {
        event.preventDefault()
        const { email, password } = event.target

        console.log('registration form submitted')
        console.log({ email, password })

        this.setState({ error: null })
        AuthApiService.postUser({
            email: email.value,
            password: password.value
        })
            .then(user => {
                email.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state
        return (
            <form className='registration-form' onSubmit={this.handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                <h2>It'll just take a second!</h2>
                <div className='email'>
                    <label htmlFor='RegistrationForm_email'></label>
                    <input className='input' required name='email' type='text' id='RegistrationForm_email' placeholder='New User Email'></input>
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm_password'></label>
                    <input className='input' required name='password' type='text' id='RegistrationForm_password' placeholder='New User Password'></input>
                </div>
                <button>Register</button>
            </form>
        )
    }
}