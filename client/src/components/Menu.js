import React, {Component, Fragment} from "react";
import "../style/menu.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tips: this.props.content ? "Welcome, Staff" : "SIGN IN",
            isSignIn: this.props.content ?? false
        }
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }
    handleTitleClick () {
        window.location.href = "/";
    }

    handleSignInClick() {
        if (!this.state.isSignIn) {
            window.location.href = "/sign_in";
        }
    }

    render() {
        return (
            <Fragment>
                <div className="menu">
                    <div className="menu-title" onClick={this.handleTitleClick}>Test & Tag</div>
                    <div className="menu-sign-in" onClick={this.handleSignInClick}>{this.state.tips}</div>
                </div>
            </Fragment>
        );
    }
}

export default Menu;
