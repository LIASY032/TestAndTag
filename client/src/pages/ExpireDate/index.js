import React from "react";
import Calendar from "react-calendar";
import MyButton from "../../components/MyButton";
import Title from "../../components/Title";
import { report } from "../../services";
import "./style.scss";
function ExpireDate() {
  const [value, onChange] = React.useState(new Date());
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Title>Expire Date</Title>
      <Calendar onChange={onChange} value={value} className="my-calendar" />

      <MyButton
        style={{ width: "15vw", marginTop: "10px" }}
        onClick={async () => {
          const tasks = JSON.parse(localStorage.getItem("tasks"));
          const item = tasks.lists[tasks.selected];
          const date = new Date();

          await report({
            item_id: item._id,
            request_id: item.request,
            condition: "pass",
            next_test_date: value.toISOString().split("T")[0],
          });
        }}
      >
        Submit
      </MyButton>
    </div>
  );
}

export default ExpireDate;
