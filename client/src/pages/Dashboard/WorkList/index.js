import React from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { finished_task } from "../../../services";

function WorkList() {
  const [tasks, setTasks] = React.useState();
  React.useEffect(() => {
    // once this component created, fetch finished task
    async function response() {
      const t = await finished_task();
      setTasks(t);
    }
    response();
  });

  const header = [
    "ID",
    "Ownership",
    "Purchased Date",
    "Address",
    "Name",
    "Email",
    "Result",
  ];
  return (
    <div>
      <Button
        size="small"
        startIcon={<ArrowBackIosNewIcon />}
        href="/dashboard"
      >
        Back to Dashboard
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {header.map((title, index) => {
                return <TableCell key={index}>{title}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks &&
              tasks.map((task, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index} </TableCell>

                    <TableCell>{task.ownership}</TableCell>
                    <TableCell>{task.purchased_date.split("T")[0]}</TableCell>

                    <TableCell>{`building: ${task.building} floor: ${task.floor} room: ${task.room}`}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.email}</TableCell>
                    <TableCell>{task.condition}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default WorkList;
