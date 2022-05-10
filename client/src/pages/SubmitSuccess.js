import React, {Component} from "react";
import "../style/submitSuccess.css"

class SubmitSuccess extends Component {
    render() {
        return (
            <div className="success-container">
                <div className="success-title">Submit Success!</div>
                <div className="success-tip">
                    We will contact you within 24 hours to discuss your testing.
                </div>
            </div>

        );
    }
}

export default SubmitSuccess;
