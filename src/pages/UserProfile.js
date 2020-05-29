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

// import React, { useState } from 'react';

// function useFormInput(initialState) {
//     const [value, setValue] = useState(initialState)
//     function handleChange(e) {
//         setValue(e.target.value)
//     }
//     return {
//         value,
//         onChange: handleChange
//     }
// }

// const UserProfile = props => {
//     const username = useFormInput(props.user.username)
//     const email = useFormInput(props.user.email)
//     const wallet = useFormInput(props.user.wallet)
//     const color = useFormInput(props.user.color)
//     const address = useFormInput(props.user.address)

//     const handleSubmit = event => {
//         event.preventDefault()
//         console.log("Submitted!")
//         // fetch(URL, {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //         Accept: "application/json"
//         //     },
//         //     body: JSON.stringify(this.state.fields)
//         // })
//         // .then(resp => resp.json())
//         // .then(user => {
//         //     if (!user.error) {
//         //         this.props.onLogin(user)
//         //         this.props.history.push('/')
//         //     } else {
//         //         this.setState({ error: true })
//         //     }
//         // })
//         // .catch()
//         // this.setState({ fields: EMPTYFIELDS })
//     }

//     return(
//         <div className="ui form">
//             <form onSubmit={handleSubmit}>
//                 <div className="ui field">
//                     <label>Username</label><br/>
//                     <input
//                         name="username"
//                         placeholder="Enter username"
//                         {...username}
//                     />
//                 </div>
//                 <div className="ui field">
//                     <label>Email</label><br/>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter email"
//                         {...email}
//                     />
//                 </div>
//                 <div className="ui field">
//                     <label>Wallet</label><br/>
//                     <input
//                         type="number"
//                         name="wallet"
//                         placeholder="Enter wallet amount"
//                         {...wallet}
//                     />
//                 </div>
//                 <div className="ui field">
//                     <label>Favorite Color</label><br/>
//                     <input
//                         name="color"
//                         placeholder="Enter favorite color"
//                         {...color}
//                     />
//                 </div>
//                 <div className="ui field">
//                     <label>Address</label><br/>
//                     <textarea
//                         name="address"
//                         placeholder="Enter address"
//                         {...address}
//                     />
//                 </div>
//                 <div className="form button">
//                     <button type="submit">
//                         Login
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default UserProfile