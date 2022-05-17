import React, {Component} from "react";
import "./oldItem.css";
import itemPic from "../static/images/new-item.jpg";
import {Button, TextField} from "@mui/material";

const picURL = itemPic;
class OldItem extends Component {
    handleTipClick() {
        window.location.href = "/new";
    }
    render() {
        return (
            <div className="old-item-container">
                <img className="old-item-pic" src={picURL} />
                <div className="old-item-form">
                    <div className="old-item-title">Request an Existing Equipment Test</div>
                    <div className="old-item-tips">
                        <Button onClick={this.handleTipClick}>Testing a New Equipment? Click Here</Button>
                    </div>
                    <div className="item-order">
                        {/*<input className="order-input" placeholder={"Your Service Order No."}/>*/}
                        <div className="order-input">
                            <TextField fullWidth size="small" label="Your Service Order NO." variant="standard"/>
                        </div>
                        <Button variant="contained" color="success">QUERY</Button>
                    </div>
                </div>
            </div>

        );
    }
}

export default OldItem;
