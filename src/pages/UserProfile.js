import React, { Component } from 'react';

export default class UserProfile extends Component {
    state = {
        fields: {
            username: "",
            color: "",
            address: "",
            wallet: "",
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        this.setState({ fields: this.props.currentUser, updated:false })
    }
   
    handleChange = event => {
        const newFields = {...this.state.fields, [event.target.name]: event.target.value}
        this.setState({ fields: newFields })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userUpdate(this.state.fields)
        this.props.history.push("/")
    }

    render() {

        const { username, color, address, wallet, email} = this.state.fields
        return(
            <div className="ui form">
                <h1>Your User Profile</h1>
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
                    <div className="form button">
                        <button type="submit">
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        )
    }    
}
