import React, {Component} from "react";
import "../style/createItem.css";
import itemPic from "../static/images/new-item.jpg";

const picURL = itemPic;
class CreateItem extends Component {
    handleTipClick() {
        window.location.href = "/old";
    }

    handleBtnClick() {
        window.location.href = "/submit_success";
    }

    render() {
        return (
            <div className="new-item-container">
                <img className="new-item-pic" src={picURL} />
                <div className="new-item-form">
                    <div className="new-item-title">Request a Test from Test & Tag</div>
                    <div className="new-item-tips" onClick={this.handleTipClick}>Testing an Existing Equipment? Click Here</div>
                    <div className="item-title">Your Equipment</div>
                    <input className="item-normal" />
                    <div className="item-title">Ownership</div>
                    <select className="item-normal" />
                    <div className="item-title">Purchase Date</div>
                    <select className="item-normal" /> // todo
                    <div className="item-title">Address ( Building / Floor / Room )</div>
                    <input className="item-normal" />
                    <div className="item-title">Testing Tag</div>


                    <div className="item-title">Your Name</div>
                    <input className="item-normal" />
                    <div className="item-title">Email Address</div>
                    <input className="item-normal" />
                    <div className="item-title">Message</div>
                    <textarea rows="4" className="item-textarea"></textarea>
                    <div className="item-btn" onClick={this.handleBtnClick}>SUBMIT</div>


                </div>

            </div>

        );
    }
}

export default CreateItem;
