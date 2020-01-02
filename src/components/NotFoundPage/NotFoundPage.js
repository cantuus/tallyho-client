import React, { Component } from 'react'

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className='NotFoundPage'>
        <h2>You hit a 404 which is computer lingo for this page doesn't exist!</h2>
        <p>Try going back to the page you were at before</p>
      </section>
    )
  }
}