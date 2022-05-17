import React from "react";
import { Form, Button } from "react-bootstrap";
import Title from "../../components/Title";
import { useDispatch } from "react-redux";
import { getTasks } from "../../store/actions";
import { report } from "../../services";
function Report() {
  const dispatch = useDispatch();
  const reason = React.useRef();
  return (
    <>
      <Title>Report</Title>
      <Form
        style={{
          width: "30%",
          border: "1px solid #8f8e8e",
          marginTop: "4%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "10px",
        }}
      >
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <Form.Control ref={reason} />
        </Form.Group>

        <Button
          onClick={async () => {
            const tasks = JSON.parse(localStorage.getItem("tasks"));
            const item = tasks.lists[tasks.selected];

            await report({
              item_id: item._id,
              request_id: item.request,
              condition: "fail",
              reason: reason.current.value,
            });
            await getTasks(dispatch);
            window.location.href = "/tester";
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Report;
