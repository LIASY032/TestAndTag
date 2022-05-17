import {Component, Fragment} from "react";
import "./dashbord.css"

class Dashboard extends Component {
    handleTaskListClick() {
        window.location.href = "/work_list";
    }

    handleExpiringListClick() {
        window.location.href = "/statics";
    }

    handleCalendarClick() {
        window.location.href = "/work_calendar";
    }

    render() {
        return (
            <Fragment>
                <div className="task-content">
                    <div className="task-item" onClick={this.handleTaskListClick}>
                        <div className="task-item-title">Tasks List</div>
                        <div className="task-item-details">3</div>
                    </div>
                    <div className="task-item">
                        <div className="task-item-title" onClick={this.handleExpiringListClick}>Expiring Tasks</div>
                        <div className="task-item-details">3</div>
                    </div>
                </div>
                <div className="work-calendar" onClick={this.handleCalendarClick}>
                    Work Calendar
                </div>
            </Fragment>
            )
    }
}

export default Dashboard;
