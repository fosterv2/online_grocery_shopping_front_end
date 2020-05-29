import React, { Component } from 'react';

const AuthHOC = WrappedComponent => {
    return class AuthHOC extends Component {
        state = {
            loggedIn: false
        }

        componentDidMount() {
            if (!localStorage.getItem("user_id")) {
                this.props.history.push("/login")
            } else {
                this.setState({
                    authorized: true
                })
            }
        }

        render() {
            return(
                <div>
                    {this.state.loggedIn ? <WrappedComponent /> : null}
                </div>
            )
        }
    }
}

export default AuthHOC