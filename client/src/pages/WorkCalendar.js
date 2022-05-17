import React, {Component, useState} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import "./workCalendar.css";

class WorkCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="calendar-content">
                <div className="work-calendar-title">Plan the Leave Day</div>
                <Calendar className="work-calendar" locale="en-GB" />
                <div className="work-calendar-btn">APPLY</div>
            </div>
        )
    }
}

export default WorkCalendar;
