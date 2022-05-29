import React from "react";
import "./home.css";
import { Button } from "@mui/material";

function HomePage() {
  function handleBtnClick() {
    window.location.href = "/new";
  }
  return (
    <div className="home-container">
      <div className="home-description">TEST & TAG ANYTIME</div>
      <div className="home-title">Your Professional Little Helper</div>
      <Button
        variant="contained"
        color="success"
        className="home-button"
        onClick={handleBtnClick}
      >
        GET HELP NOW
      </Button>
    </div>
  );
}

export default HomePage;
