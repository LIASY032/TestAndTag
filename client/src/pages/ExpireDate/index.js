import React from "react";
import Calendar from "react-calendar";
import MyButton from "../../components/MyButton";
import Title from "../../components/Title";
import { report } from "../../services";
import "./style.scss";
function ExpireDate({ item_id, request_id }) {
  const [value, onChange] = React.useState(new Date());
  console.log(item_id);
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Title>Expire Date</Title>
      <Calendar onChange={onChange} value={value} className="my-calendar" />

      <MyButton
        style={{ width: "15vw", marginTop: "10px" }}
        onClick={async () => {
          await report({
            item_id,
            request_id,
            condition: "pass",
            next_test_date: value.toString().split("T")[0],
          });
        }}
      >
        Submit
      </MyButton>
    </div>
  );
}

export default ExpireDate;
