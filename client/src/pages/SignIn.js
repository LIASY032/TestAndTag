import React, {Component} from "react";
import "./signIn.css"

class SignIn extends Component {
    handleSignInClick() {
        // to do - sign in

        window.location.href = "/dashboard";
    }

    render() {
        return (
            <div className="sign-in-container">
                <div className="sign-in-title">Sign In</div>
                <div className="sign-in-tips">Staff Only - Sign into your administration staff account</div>
                <div className="sign-in-item">Email Address</div>
                <input />
                <div className="sign-in-item">Password</div>
                <input type="password" />
                <div className="sign-in-btn" onClick={this.handleSignInClick}>SIGN IN</div>
            </div>
        );
    }
}

export default SignIn;
