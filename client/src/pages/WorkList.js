import React, { Component, Fragment } from "react";
import {Table} from "react-bootstrap";
import "./workList.css"
import WorkDetails from "../components/WorkDetails";

class WorkList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeader: [
                "ORDER NO", "APPLY DATE", "ADDRESS", "EMAIL", "USER NAME"
            ],
            listExample: [
                {
                    id: 1,
                    order_no: "22050607221201",
                    task_status: 1, // 1:user just submit, did not contact 2:contacted and wait for the test 3:completed
                    ownership: 1,
                    description: "",
                    purchased_date: "2022/01/02",
                    address: "A Building, Floor 1, Room 1",
                    name: "ZhangSan",
                    email: "ZhangSan@example",
                    create_at:"2022/05/06"
                },
                {
                    id: 2,
                    order_no: "22050608262202",
                    task_status: 1,
                    ownership: 2,
                    description: "",
                    purchased_date: "2021/05/12",
                    name: "LiSi",
                    address: "B Building, Floor 1, Room 1",
                    email: "LiSi@example",
                    create_at:"2022/05/06"
                },
                {
                    id: 3,
                    order_no: "22050610234203",
                    task_status: 2,
                    ownership: 1,
                    description: "",
                    purchased_date: "2021/03/23",
                    name: "ZhaoWu",
                    address: "C Building, Floor 1, Room 1",
                    email: "ZhaoWu@example",
                    create_at:"2022/05/06"
                },

            ]
        }
    }
    handleStaticsClick() {
        window.location.href = "/statics";
    }

    handleItemClick(id) {
        window.location.href = "/work_details";
    }

    render() {
        return (
            <Fragment>
                <div className="work-list-header">
                    <div className="work-list-title">Tasks List</div>
                    <div className="work-list-tips" onClick={this.handleStaticsClick}>Expiring Task? Click Here</div>
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
                            return <tr key={index}  onClick={this.handleItemClick.bind(this, item.id)}>
                                <td>{item.order_no}</td>
                                <td>{item.create_at}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

export default WorkList;
