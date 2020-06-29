import React, { Component } from 'react';

// const URL = "http://localhost:3000/users"
const URL = "https://not-so-fresh-backend.herokuapp.com/users"
const EMPTYFIELDS = {
    username: "",
    color: "",
    address: "",
    wallet: "",
    email: "",
    password: ""
}

export default class Signup extends Component {
    state = {
        fields: EMPTYFIELDS,
        error: false
    }

    handleChange = event => {
        const newFields = {...this.state.fields, [event.target.name]: event.target.value}
        this.setState({ fields: newFields })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(this.state.fields)
        })
        .then(resp => resp.json())
        .then(user => {
            if (!user.error) {
                this.props.onLogin(user)
                this.props.history.push('/')
            } else {
                this.setState({ error: true })
            }
        })
        .catch()
        this.setState({ fields: EMPTYFIELDS })
    }

    render() {
        const { username, color, address, wallet, email, password } = this.state.fields
        return(
            <div className="ui form">
                {this.state.error ? <h1>That username is already taken</h1> : null}
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
                            placeholder="Enter password"
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
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="toggle button">
                    <h2>or</h2>
                    <button type="submit" onClick={() => this.props.history.push("/login")}>
                        Login
                    </button>
                </div>
            </div>
        )
    }    
}