import React, { Component } from "react";
import "./TaskDetails.css";
import {Button} from "@mui/material";

class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informExm: {
                id: 1,
                order_no: "22050607221201",
                ownership: 1,
                description: "",
                purchased_date: "2022/01/02",
                address: "A Building, Floor 1, Room 1",
                name: "ZhangSan",
                email: "ZhangSan@example",
                create_at:"2022/05/06"
            },
            informationTitle: [
                "Order No",
                "Apply Time",
                "Email",
                "Name",
                "Address",
                "Ownership",
                "Purchase Date",
                "Item Description",
                "Testing Tag",
                "Tested Count"
            ]
        }
    }

    handleBackClick() {
        window.location.href = "/work_list";
    }

    render() {
        return (
            <div className="task-details-container">
                <Button className="details-back-list" onClick={this.handleBackClick}>
                    Back to List
                </Button>

                <div className="details-title">TASK INFORMATION</div>

                {this.state.informationTitle.map((item, index) => {
                    return <div className="item-title">{item}</div>
                })}


                <div className="details-title">TAG INFORMATION</div>
                <div className="item-title">Expiration Date</div>
                <div className="item-title">Tag Result</div>
                <div className="item-title">Tag Description</div>
                <textarea rows="4" className="tag-textarea"></textarea>
                <div className="btn-container">
                    <Button variant="contained" color="success" className="details-btn btn-tag">TAG</Button>
                    <Button variant="contained" className="details-btn btn-back" onClick={this.handleBackClick}>BACK</Button>
                </div>
            </div>
        );
    }
}

export default TaskDetails;
