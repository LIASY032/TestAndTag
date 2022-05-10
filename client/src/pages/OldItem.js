import React, {Component} from "react";
import "../style/oldItem.css";
import itemPic from "../static/images/new-item.jpg";

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
                    <div className="old-item-tips" onClick={this.handleTipClick}>Testing a New Equipment? Click Here</div>
                    <div className="item-order">
                        <input className="order-input" placeholder={"Your Service Order No."}/>
                        <div className="order-btn">QUERY</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default OldItem;
