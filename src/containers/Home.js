import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Welcome to Author's Haven</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Home
