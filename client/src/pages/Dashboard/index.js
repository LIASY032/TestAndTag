import React from "react";
import "./dashboard.css";
import { Button, Container } from "@mui/material";

function Dashboard() {
  return (
    <>
      <Container
        sx={{
          width: "80%",
          margin: "100px auto 0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Button
          color="success"
          sx={{
            fontSize: "28px",
          }}
          href="/task_pool"
        >
          Task Pool
        </Button>
        <Button
          color="success"
          sx={{
            fontSize: "28px",
            marginTop: "20px",
          }}
          href="/work_list"
        >
          Finished Tasks
        </Button>
      </Container>
    </>
  );
}

export default Dashboard;

export { default as WorkList } from "./WorkList";
export { default as TaskPools } from "./TaskPool";
