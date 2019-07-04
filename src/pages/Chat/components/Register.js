import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      displayName: '',
      profilePicUrl: '',
      password: '',
    }
  }

  onUserNameChange = e => {
    this.setState({ username: e.target.value })
  }

  ondisplayNameChange = e => {
    this.setState({ displayName: e.target.value })
  }

  onProfilePichange = e => {
    this.setState({ profilePicUrl: e.target.value })
  }

  onpasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  onRegister = () => {
    axios.post('http://167.99.66.103/api/users', {
      username: this.state.username,
      displayName: this.state.displayName,
      profilePicUrl: this.state.profilePicUrl,
      password: this.state.password,
    }).then(res => {
       this.setState({ errorMessage: res.data.message })
     })
  }

  render() {
    return (
      <div className="form-wrapper">

        <label htmlFor="usernameId">Username</label>
        <input id="usernameId" type="text" value={this.state.username} onChange={this.onUserNameChange} />

        <label htmlFor="nameId">Display Name</label>
        <input id="nameId" type="text" value={this.state.displayname} onChange={this.ondisplayNameChange} />

        <label htmlFor="profileId">Profile Picture URL</label>
        <input id="profileId" type="text" value={this.state.profilePicUrl} onChange={this.onProfilePichange} />

        <label htmlFor="passwordId">Password</label>
        <input id="passwordId" type="password" value={this.state.password} onChange={this.onpasswordChange} />

        <button className="submit-button" onClick={this.onRegister}>Register Now</button>

        <div className="error-msg">{this.state.errorMessage}</div>
        
      </div>
    )
  }
}

export default Register
