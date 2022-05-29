import React, {Component} from "react";
import {
    Button,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead, TablePagination,
    TableRow,
    Tooltip
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

class Statics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            detailsDialogShow: false,
            tagDialogShow: true,
            headers: ['Expiring Date', 'Name', 'Email', 'Ownership', 'Purchased Date', 'Address'],
            taskList: [
                { id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35, expiringDate: '2022-06-01' },
                { id: 2, ownership: 'Personal', purchasedDate: '2022-05-09', address: 'ptest', name: 'Alice', email:  42 },
                { id: 3, ownership: 'Personal', purchasedDate: '2022-05-08', address: 'ptest', name: 'Jay', email:  45 },
                { id: 4, ownership: 'UniSA', purchasedDate: '2022-05-11', address: 'ptest', name: 'John', email:  16 },
                { id: 5, ownership: 'Personal', purchasedDate: '2022-05-07', address: 'ptest', name: 'Bob', email:  436 },
                { id: 6, ownership: 'Personal', purchasedDate: '2022-05-06', address: 'ptest', name: 'Tom', email:  150 },
                { id: 7, ownership: 'UniSA', purchasedDate: '2022-05-05', address: 'ptest', name: 'Tonny', email:  44 },
                { id: 8, ownership: 'Personal', purchasedDate: '2022-05-04', address: 'ptest', name: 'Betty', email:  36 },
                { id: 9, ownership: 'UniSA', purchasedDate: '2022-05-02', address: 'ptest', name: 'ellen', email:  65 },
                { id: 10, ownership: 'UniSA', purchasedDate: '2022-05-01', address: 'ptest', name: 'ellen', email:  'frt5@gmail.com' },
            ],
            info: [ {id: 1, ownership: 'UniSA', purchasedDate: '2022-05-10', address: 'ptest', name: 'Jon', email: 35 }]
        }
        this.changeDetailsDialogShow = this.changeDetailsDialogShow.bind(this);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleBackClick() {
        window.location.href = "/dashboard";
    }

    changeDetailsDialogShow(flag) {
        this.setState({
            detailsDialogShow: flag
        })
    }

    handleDetailsClick(id) {
        this.setState({
            detailsDialogShow: true
        })
        this.setState({
            info: this.state.taskList[id]
        })
    }

    handleChangePage(event, newPage) {
        this.setState({
            page: newPage
        });
    };

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
                            {this.state.taskList.map((task, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{task.expiringDate}</TableCell>
                                        <TableCell>{task.name}</TableCell>
                                        <TableCell>{task.email}</TableCell>
                                        <TableCell>{task.ownership}</TableCell>
                                        <TableCell>{task.purchasedDate}</TableCell>
                                        <TableCell>{task.address}</TableCell>
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
            </div>
        );
    }
}

export default Statics;
