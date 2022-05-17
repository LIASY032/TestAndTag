import React, {Component, Fragment} from "react";
import "./menu.css"
import {Button, FormControl, InputLabel, Menu, MenuItem, Select} from "@mui/material";

class MenuLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: 0,
            name: this.props.name,
            anchorEL: null,
            open : Boolean(this.anchorEL),
            isSignIn: this.props.content ?? false
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleListClose = this.handleListClose.bind(this);
    }
    handleTitleClick () {
        window.location.href = "/";
    }

    handleButtonClick(e) {
        console.log("test:" + e.currentTarget);
        this.setState({
            anchorEl: e.currentTarget,
            open: Boolean(e.currentTarget)
        });
    }

    handleListClose() {
        this.setState({
            anchorEl: null,
            open: false
        })
    }

    handleLogoutClick() {
        console.log("click: logout" );

    }

    handleDashboardClick() {
        window.location.href = "/dashboard";
    }

    handleCalendarClick() {
        window.location.href = "/work_calendar";
    }

    render() {
        return (
            <Fragment>
                <div className="menu">
                    <div className="menu-title" onClick={this.handleTitleClick}>Test & Tag</div>
                    <div className="user-info">
                            <Button
                                id="user-button"
                                aria-controls={this.state.open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={this.state.open ? 'true' : undefined}
                                onClick={this.handleButtonClick}
                            >
                                {this.state.name}
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={this.state.anchorEl}
                                open={this.state.open}
                                onClose={this.handleListClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={this.handleDashboardClick}>Dashboard</MenuItem>
                                <MenuItem onClick={this.handleCalendarClick}>Workday Calendar</MenuItem>
                                <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
                            </Menu>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default MenuLogin ;
