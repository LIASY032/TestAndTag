import React, { Component } from "react";
import DetailsIcon from '@mui/icons-material/Details';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TaskDetailsDialog from '../components/TaskDetailsDialog';
import {
    Button, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow, Tooltip
} from "@mui/material";
import TaskTagDialog from "../components/TaskTagDialog";

class TaskPool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            detailsDialogShow: false,
            tagDialogShow: false,
            headers: ['Ownership', 'Purchased Date', 'Address', 'Name', 'Email', 'Test'],
            taskList: [
                { id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35, description: 'this is a test' },
                { id: 2, ownership: 'personal', purchasedDate: '2022-05-09', address: 'ptest', name: 'Alice', email:  42, description: 'hello world' },
                { id: 3, ownership: 'personal', purchasedDate: '2022-05-08', address: 'ptest', name: 'Jay', email:  45 },
                { id: 4, ownership: 'UniSA', purchasedDate: '2022-05-11', address: 'ptest', name: 'John', email:  16 },
                { id: 5, ownership: 'personal', purchasedDate: '2022-05-07', address: 'ptest', name: 'Bob', email:  436 },
                { id: 6, ownership: 'personal', purchasedDate: '2022-05-06', address: 'ptest', name: 'Tom', email:  150 },
                { id: 7, ownership: 'UniSA', purchasedDate: '2022-05-05', address: 'ptest', name: 'Tonny', email:  44 },
                { id: 8, ownership: 'personal', purchasedDate: '2022-05-04', address: 'ptest', name: 'Betty', email:  36 },
                { id: 9, ownership: 'UniSA', purchasedDate: '2022-05-02', address: 'ptest', name: 'ellen', email:  65 },
                { id: 10, ownership: 'UniSA', purchasedDate: '2022-05-01', address: 'ptest', name: 'ellen', email:  'frt5@gmail.com' },
            ],
            info: [ {id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35 }]
        }
        this.closeDetailsDialog = this.closeDetailsDialog.bind(this);
        this.closeTagDialog = this.closeTagDialog.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleBackClick() {
        window.location.href = "/dashboard";
    }

    closeDetailsDialog() {
        this.setState({
            detailsDialogShow: false
        })
    }

    closeTagDialog() {
        this.setState({
            tagDialogShow: false
        })
    }

    handleDetailsClick(id) {
        this.setState({
            detailsDialogShow: true,
            info: this.state.taskList[id]
        })
    }

    handleTagClick(id) {
        this.setState({
            info: this.state.taskList[id],
            tagDialogShow: true
        })
    }

    handleChangePage(event, newPage) {
        this.setState({
            page: newPage
        });
    };

    render() {
        return (
            <div className="table-content">
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
                            {this.state.taskList.map((task, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{task.ownership}</TableCell>
                                        <TableCell>{task.purchasedDate}</TableCell>
                                        <TableCell>{task.address}</TableCell>
                                        <TableCell>{task.name}</TableCell>
                                        <TableCell>{task.email}</TableCell>
                                        <TableCell>
                                            <Tooltip title="View the Details">
                                                <DetailsIcon onClick={this.handleDetailsClick.bind(this, index)}></DetailsIcon>
                                            </Tooltip>
                                            <Tooltip title="Click to Tag">
                                                <AddModeratorIcon onClick={this.handleTagClick.bind(this, index)}></AddModeratorIcon>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[]}
                                    // colSpan={12}
                                    count={this.state.taskList.length}
                                    rowsPerPage={10}
                                    page={this.state.page}
                                    // SelectProps={{
                                    //     inputProps: {
                                    //         'aria-label': 'rows per page',
                                    //     },
                                    //     native: true,
                                    // }}
                                    onPageChange={this.handleChangePage}
                                    // onRowsPerPageChange={handleChangeRowsPerPage}
                                    // ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>

                <TaskDetailsDialog
                    open={this.state.detailsDialogShow}
                    info={this.state.info}
                    closeDetailsDialog={this.closeDetailsDialog}
                ></TaskDetailsDialog>
                <TaskTagDialog
                    open={this.state.tagDialogShow}
                    info={this.state.info}
                    closeTagDialog={this.closeTagDialog}
                ></TaskTagDialog>
            </div>
        );
    }
}

export default TaskPool;
