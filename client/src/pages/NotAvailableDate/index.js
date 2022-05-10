import React from "react";
import Calendar from "react-calendar";
import MyButton from "../../components/MyButton";
import Title from "../../components/Title";
import { notAvailable } from "../../services";
function NotAvailableDate() {
  const [value, onChange] = React.useState(new Date());
  return (
    <>
      {" "}
      <div style={{ width: "100%", textAlign: "center" }}>
        <Title>Select Date For Having a Rest</Title>
        <Calendar onChange={onChange} value={value} className="my-calendar" />

        <MyButton
          style={{ width: "15vw", marginTop: "10px" }}
          onClick={async () => {
            await notAvailable(value);
          }}
        >
          Submit
        </MyButton>
      </div>
    </>
  );
}

export default NotAvailableDate;
