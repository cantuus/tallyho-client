import React, { Component } from 'react'

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

        email.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
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