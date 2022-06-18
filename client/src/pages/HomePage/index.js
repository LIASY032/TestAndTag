import React from "react";
import "./home.css";
import { Button } from "@mui/material";

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-description">TEST & TAG ANYTIME</div>
      <div className="home-title">Your Professional Little Helper</div>
      <Button
        variant="contained"
        color="success"
        className="home-button"
        href="/new"
      >
        GET HELP NOW
      </Button>
    </div>
  );
}

export default HomePage;
