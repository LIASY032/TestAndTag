import React, {Component} from "react";
import "./createItem.css";
import itemPic from "../static/images/new-item.jpg";
import {DatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {Button, TextField} from "@mui/material";

const picURL = itemPic;
class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseDate: new Date()
        }
        this.handlePurchaseDateChange = this.handlePurchaseDateChange.bind(this);
    }

    handleTipClick() {
        window.location.href = "/old";
    }

    handleBtnClick() {
        window.location.href = "/submit_success";
    }

    handlePurchaseDateChange() {
        this.setState({
            purchaseDate: 0
        })
    }

    render() {
        return (
            <div className="new-item-container">
                <img className="new-item-pic" src={picURL} />
                <div className="new-item-form">
                    <div className="new-item-title">Request a Test from Test & Tag</div>
                    <div className="new-item-tips">
                        <Button onClick={this.handleTipClick}>Testing an Existing Equipment? Click Here</Button>
                    </div>
                    <div className="item-title">Your Equipment</div>
                    <input className="item-normal" />
                    <div className="item-title">Ownership</div>
                    <select className="item-normal" />
                    <div className="item-title">Purchase Date</div>
                    {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
                    {/*    <DatePicker*/}
                    {/*/!*        label="test"*!/*/}
                    {/*/!*        date={this.state.purchaseDate}*!/*/}
                    {/*        onChange={this.handlePurchaseDateChange}*/}
                    {/*        renderInput={(params) => <TextField {...params} />}*/}
                    {/*/!*        // value={}*!/*/}
                    {/*    />*/}
                    {/*</LocalizationProvider>*/}

                    <div className="item-title">Address ( Building / Floor / Room )</div>
                    <input className="item-normal" />
                    <div className="item-title">Testing Tag</div>


                    <div className="item-title">Your Name</div>
                    <input className="item-normal" />
                    <div className="item-title">Email Address</div>
                    <input className="item-normal" />
                    <div className="item-title">Message</div>
                    <textarea rows="4" className="item-textarea"></textarea>
                    <Button variant="contained" color="success" className="item-btn" onClick={this.handleBtnClick}>SUBMIT</Button>


                </div>

            </div>

        );
    }
}

export default CreateItem;
