import React, { Component, Fragment } from "react";
import "./taskPool.css";
import DetailsIcon from '@mui/icons-material/Details';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import {
    Button, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";

class TaskPool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: ['Ownership', 'Purchased Date', 'Address', 'Name', 'Email', 'Operation'],
            taskList: [
                { id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35 },
                { id: 2, ownership: 'Personal', purchasedDate: '2022-05-09', address: 'ptest', name: 'Alice', email:  42 },
                { id: 3, ownership: 'Personal', purchasedDate: '2022-05-08', address: 'ptest', name: 'Jay', email:  45 },
                { id: 4, ownership: 'UniSA', purchasedDate: '2022-05-11', address: 'ptest', name: 'John', email:  16 },
                { id: 5, ownership: 'Personal', purchasedDate: '2022-05-07', address: 'ptest', name: 'Bob', email:  436 },
                { id: 6, ownership: 'Personal', purchasedDate: '2022-05-06', address: 'ptest', name: 'Tom', email:  150 },
                { id: 7, ownership: 'UniSA', purchasedDate: '2022-05-05', address: 'ptest', name: 'Tonny', email:  44 },
                { id: 8, ownership: 'Personal', purchasedDate: '2022-05-04', address: 'ptest', name: 'Betty', email:  36 },
                { id: 9, ownership: 'UniSA', purchasedDate: '2022-05-02', address: 'ptest', name: 'ellen', email:  65 },
                { id: 10, ownership: 'UniSA', purchasedDate: '2022-05-01', address: 'ptest', name: 'ellen', email:  'frt5@gmail.com' },
            ]
        }
    }

    handleBackClick() {
        window.location.href = "/dashboard";
    }

    render() {
        return (
            <div className="pool-content">
                <Button
                    size="small"
                    onClick={this.handleBackClick}
                    startIcon={<ArrowBackIosNewIcon />}
                >Back to Dashboard</Button>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {this.state.headers.map((title, index) => {
                                    return <TableCell key={index}>{title}</TableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.taskList.map((task) => {
                                return (
                                    <TableRow key={task.id}>
                                        <TableCell>{task.ownership}</TableCell>
                                        <TableCell>{task.purchasedDate}</TableCell>
                                        <TableCell>{task.address}</TableCell>
                                        <TableCell>{task.name}</TableCell>
                                        <TableCell>{task.email}</TableCell>
                                        <TableCell>
                                            <DetailsIcon></DetailsIcon>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={false}
                                    // colSpan={12}
                                    count={this.state.taskList.length}
                                    rowsPerPage={10}
                                    page={1}
                                    // SelectProps={{
                                    //     inputProps: {
                                    //         'aria-label': 'rows per page',
                                    //     },
                                    //     native: true,
                                    // }}
                                    // onPageChange={handleChangePage}
                                    // onRowsPerPageChange={handleChangeRowsPerPage}
                                    // ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default TaskPool;
