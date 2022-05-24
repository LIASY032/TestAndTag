import {Component, Fragment} from "react";
import "./dashbord.css";
import {Box, Button, Container, Divider, Stack, Tab, Tabs} from "@mui/material";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1
        }
        // this.handleSignInClick = this.handleSignInClick.bind(this);
    }

    handleTaskPoolClick() {
        window.location.href = "/task_pool";
    }

    handleTaskListClick() {
        window.location.href = "/work_list";
    }

    handleExpiringListClick() {
        window.location.href = "/statics";
    }


    render() {
        return (
            <Fragment>
                <Container sx={{
                    width: '80%',
                    margin: '100px auto 0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Button
                        color="success"
                        sx={{
                            fontSize: '28px'
                        }}
                        onClick={this.handleTaskPoolClick}
                    >Task Pool</Button>
                    <Button
                        color="success"
                        sx={{
                            fontSize: '28px',
                            marginTop: '20px'
                        }}
                        onClick={this.handleTaskListClick}
                    >Finished Tasks</Button>
                    <Button
                        color="success"
                        sx={{
                            fontSize: '28px',
                            marginTop: '20px'
                        }}
                        onClick={this.handleExpiringListClick}
                    >Expiring Tasks</Button>


                </Container>

                {/*<div className="task-content">*/}
                {/*    <div className="task-item" >*/}
                {/*        <div className="task-item-title">Tasks List</div>*/}
                {/*        <div className="task-item-details">3</div>*/}
                {/*    </div>*/}
                {/*    <div className="task-item">*/}
                {/*        <div className="task-item-title" >Expiring Tasks</div>*/}
                {/*        <div className="task-item-details">3</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Fragment>
            )
    }
}

export default Dashboard;
