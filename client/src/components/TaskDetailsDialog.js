import React, { Component } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormGroup, FormLabel,
    TextField
} from "@mui/material";

class TaskDetailsDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    handleCloseClick() {
        this.setState({
            open: false
        })
        this.props.changeDetailsDialogShow(false);
    }

    render() {
        return (
            <Dialog open={this.state.open} onClose={this.handleCloseClick}>
                <DialogTitle>Details</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormLabel>Ownership</FormLabel>


                        <FormLabel>Purchased Date</FormLabel>

                        <FormLabel>Address</FormLabel>

                        <FormLabel>Name</FormLabel>

                        <FormLabel>Email</FormLabel>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleCloseClick}
                    >Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default TaskDetailsDialog;
