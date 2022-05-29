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
            info: [],
            open: false,
        }
        this.handleClose = this.handleClose.bind(this);
    }

    static getDerivedStateFromProps(newProps) {
        return {
            open: newProps.open,
            info: newProps.info,
            descriptionHidden: (newProps.info.description && newProps.info.description != '')  ? false :true
        }
    }

    handleClose() {
        this.props.closeDetailsDialog();
    }

    render() {
        return (
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Details</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormLabel>Ownership: {this.state.info.ownership}</FormLabel>

                        <FormLabel>Purchased Date: {this.state.info.purchasedDate}</FormLabel>

                        <FormLabel>Address: {this.state.info.address}</FormLabel>

                        <FormLabel>Name: {this.state.info.name}</FormLabel>

                        <FormLabel>Email: {this.state.info.email}</FormLabel>

                        <FormLabel hidden={this.state.descriptionHidden}>Description: {this.state.info.description}</FormLabel>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                    >Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default TaskDetailsDialog;
