import React from "react";
import { Button } from "react-bootstrap";
import Calendar from "react-calendar";
import Title from "../../components/Title";
function ExpireDate() {
  const [value, onChange] = React.useState(new Date());
  return (
    <div>
      <Title>Expire Date</Title>
      <Calendar onChange={onChange} value={value} />
      <Button> Submit </Button>
    </div>
  );
}

export default ExpireDate;
