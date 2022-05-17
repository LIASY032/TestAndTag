import React, {Component, Fragment} from "react";
import {Table} from "react-bootstrap";
import {Button} from "@mui/material";

class Statics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: [
                "ORDER NO", "EMAIL", "USER NAME", "EXPIRATION DATE"
            ],
            listExample: [
                {
                    id: 1,
                    order_no: "22050607221201",
                    ownership: 1,
                    description: "",
                    purchased_date: "2022/01/02",
                    address: "A Building, Floor 1, Room 1",
                    name: "ZhangSan",
                    email: "ZhangSan@example",
                    create_at: "2022/05/06",
                    expiration_date: "2022/06/01",
                },
                {
                    id: 2,
                    order_no: "22050608262202",
                    ownership: 2,
                    description: "",
                    purchased_date: "2021/05/12",
                    name: "LiSi",
                    address: "B Building, Floor 1, Room 1",
                    email: "LiSi@example",
                    create_at:"2022/05/06",
                    expiration_date: "2022/06/02",
                },
                {
                    id: 3,
                    order_no: "22050610234203",
                    ownership: 1,
                    description: "",
                    purchased_date: "2021/03/23",
                    name: "ZhaoWu",
                    address: "C Building, Floor 1, Room 1",
                    email: "ZhaoWu@example",
                    create_at:"2022/05/06",
                    expiration_date: "2022/06/03",
                },

            ]
        }
    }

    handleWorkListClick() {
        window.location.href = "/work_list";
    }

    render() {
        return (
            <Fragment>
                <div className="work-list-header">
                    <div className="work-list-title">Expiring Tasks</div>
                    <Button className="work-list-tips" onClick={this.handleWorkListClick}>Back To Task List</Button>
                </div>
                <Table className="work-list-table">
                    <thead className="table-header">
                    <tr>
                        {this.state.tableHeader.map((item, index) => {
                            return <th className="table-thead-th" key={index}>{item}</th>
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.listExample.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.order_no}</td>
                            <td>{item.email}</td>
                            <td>{item.name}</td>
                            <td>{item.expiration_date}</td>
                        </tr>
                    })}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

export default Statics;
