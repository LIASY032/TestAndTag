import React, {Component} from "react";

import "./menu.css"
import {Button} from "@mui/material";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleSignInClick = this.handleSignInClick.bind(this);
    }
    handleTitleClick () {
        window.location.href = "/";
    }

    handleSignInClick() {
        window.location.href = "/sign_in";
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-title" onClick={this.handleTitleClick}>Test & Tag</div>
                <Button variant="text" color="success" onClick={this.handleSignInClick}>Sign In</Button>
            </div>
        );
    }
}

export default Menu;
