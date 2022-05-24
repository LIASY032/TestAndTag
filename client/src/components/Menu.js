import React, {Component} from "react";
import "./menu.css"
import {Button} from "@mui/material";
import AddModeratorIcon from '@mui/icons-material/AddModerator';

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
                <Button
                    variant="text"
                    size="large"
                    sx={{
                        color: '#000000',
                    }}
                    onClick={this.handleTitleClick}
                    startIcon={<AddModeratorIcon />}
                >Test & Tag</Button>
                <Button
                    variant="text"
                    sx={{
                        color: '#000000'
                    }}
                    onClick={this.handleSignInClick}
                >Sign In</Button>
            </div>
        );
    }
}

export default Menu;
