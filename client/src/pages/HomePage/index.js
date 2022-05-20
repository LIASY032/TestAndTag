import React, {Component} from "react";
import "./home.css";
import {Button} from "@mui/material";
class HomePage extends Component {
    handleBtnClick () {
        window.location.href = "/new";
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-description">TEST & TAG ANYTIME</div>
                <div className="home-title">Your Professional Little Helper</div>
                <Button variant="contained" color="success" className="home-button" onClick={this.handleBtnClick}>GET HELP NOW</Button>
            </div>
        );
    }
}

export default HomePage;
