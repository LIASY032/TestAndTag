import React, { Component } from "react";
import "../style/workDetails.css";
import { Modal } from "bootstrap";
import { ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";

class WorkDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    render() {
        let close = () => this.setState({isShow: false})
        return (
            <div className="details-container">
                <ModalDialog
                    className="details-modal">
                    <ModalHeader>
                        <ModalTitle>Order Details</ModalTitle>
                    </ModalHeader>
                    <ModalBody></ModalBody>
                    <ModalFooter>
                        <div className="modal-btn modal-btn-tag" onClick={close}>TAG</div>
                        <div className="modal-btn modal-btn-cancel">CANCEL</div>
                    </ModalFooter>
                </ModalDialog>
            </div>

        );
    }
}

export default WorkDetails;
