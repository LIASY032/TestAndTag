import React, {Component} from "react";
import "../style/home.css";
class HomePage extends Component {
    handleBtnClick () {
        window.location.href = "/new";
    }

    render() {
        return (
            <div className="home-container">
                <div className="home-description">TEST & TAG ANYTIME</div>
                <div className="home-title">Your Professional Little Helper</div>
                <div className="home-button" onClick={this.handleBtnClick}>GET HELP NOW</div>
            </div>
        );
    }
}

export default HomePage;
