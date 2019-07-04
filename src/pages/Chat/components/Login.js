import React, { Component } from 'react'
import axios from 'axios'
import './form.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
    }
  }

  componentDidMount() {
    axios.get('http://167.99.66.103/api/users/').then(res => {
      console.log(res)
    })
  }

  setUsername = e => {
    this.setState({
      username: e.target.value
    })
  }

  setPassword = e => {
    this.setState({
      password: e.target.value
    })
  }

    onLoginRequest = () => {
    axios.post('http://167.99.66.103/api/users/login', {
      username: this.state.username,
      password: this.state.password,
    }).then(res => {
      if (res.data.success === false) {
        this.setState({ errorMessage: res.data.message })
      } else {
        // ubah appState ke 'active'
        this.props.setAppState('active')
        // set username yang logged in
        this.props.setUsername(this.state.username)
      }
    })
  }

  render() {
    return (
      <div className="form-wrapper">

        <label htmlFor="usernameId">Username</label>
        <input id="usernameId" type="text" value={this.state.username} onChange={this.setUsername} />

        <label htmlFor="passwordId">Password</label>
        <input id="passwordId" type="password" value={this.state.password} onChange={this.setPassword} />

        <button className="submit-button" onClick={this.onLoginRequest}>Login Now</button>

        <div className="error-msg">{this.state.errorMessage}</div>
      </div>
    )
  }
}

export default Login
