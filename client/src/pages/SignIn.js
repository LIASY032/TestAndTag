import React, {Component} from "react";
import "./signIn.css"
import {Button, FormGroup, FormLabel, Input} from "@mui/material";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: ''
        }
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleItemChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        })
    }

    handleBtnClick() {
        // to do - sign in
        window.location.href = "/dashboard";
    }

    render() {
        return (
            <div className="sign-in-container">
                <div className="sign-in-title">Sign In</div>
                <div className="sign-in-tips">Staff Only - Sign into your administration staff account</div>
                <FormGroup>
                    <FormLabel>Email Address</FormLabel>
                    <Input name="account" value={this.state.account} onChange={this.handleItemChange} />
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handleItemChange} />
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '20px'
                        }}
                        color="success"
                        onClick={this.handleBtnClick}
                    >SIGN IN</Button>
                </FormGroup>
            </div>
        );
    }
}

export default SignIn;
