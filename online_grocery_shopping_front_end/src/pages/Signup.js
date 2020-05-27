import React, { Component } from 'react';

export default class Signup extends Component {
    state = {
        username: "",
        color: "",
        address: "",
        password: "",
        wallet: "",
        email: ""
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
    const { username, color, address, password, wallet, email } = this.state
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
              <label>Email</label><br/>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Wallet</label><br/>
              <input
                type="number"
                name="wallet"
                placeholder="Enter wallet amount"
                value={wallet}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Favorite Color</label><br/>
              <input
                name="color"
                placeholder="Enter favorite color"
                value={color}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Address</label><br/>
              <textarea
                name="address"
                placeholder="Enter address"
                value={address}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label><br/>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            {/* <div className="ui field">
              <label>Password Confirmation</label><br/>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div> */}
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