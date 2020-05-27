import React, { Component } from 'react';

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        const attribute = event.target.name
        const change = event.target.value
        this.setState({
            [attribute]: change
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("Submitted!")
    }

render() {
    const { username, password } = this.state
    return(
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label><br/>
              <input
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label><br/>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form button">
                <button type="submit">
                    Login
                </button>
            </div>
          </form>
        </div>
    )
}    
}