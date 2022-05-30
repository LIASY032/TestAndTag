import React, { Component, Fragment } from "react";
import { Table } from "react-bootstrap";
import {
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ResultIcon from "../../../components/ResultIcon";
import { finished_task } from "../../../services";

function WorkList() {
  const [tasks, setTasks] = React.useState();
  React.useEffect(() => {
    async function response() {
      const t = await finished_task();
      setTasks(t);
    }
    response();
  });

  const header = [
    "ID",
    "Ownership",
    "Purchased Date",
    "Address",
    "Name",
    "Email",
    "Result",
  ];
  return (
    <div>
      <Button
        size="small"
        startIcon={<ArrowBackIosNewIcon />}
        href="/dashboard"
      >
        Back to Dashboard
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {header.map((title, index) => {
                return <TableCell key={index}>{title}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks &&
              tasks.map((task, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index} </TableCell>

                    <TableCell>{task.ownership}</TableCell>
                    <TableCell>{task.purchased_date}</TableCell>

                    <TableCell>{`building: ${task.building} floor: ${task.floor} room: ${task.room}`}</TableCell>
                    <TableCell>{task.name}</TableCell>
                    <TableCell>{task.email}</TableCell>
                    <TableCell>{task.condition}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
          {/* <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[]}
                  // colSpan={12}
                  count={this.state.taskList.length}
                  rowsPerPage={10}
                  page={this.state.page}
                  onPageChange={this.handleChangePage}
                />
              </TableRow>
            </TableFooter> */}
        </Table>
      </TableContainer>
    </div>
  );
}

export default WorkList;

// class WorkList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       page: 0,
//       detailsDialogShow: false,
//       tagDialogShow: true,
//       headers: [
//         "Ownership",
//         "Purchased Date",
//         "Address",
//         "Name",
//         "Email",
//         "Result",
//       ],
//       taskList: [
//         {
//           id: 1,
//           ownership: "UniSA",
//           purchasedDate: "2022-05-10",
//           address: "ptest",
//           name: "Jon",
//           email: 35,
//           result: false,
//         },
//         {
//           id: 2,
//           ownership: "Personal",
//           purchasedDate: "2022-05-09",
//           address: "ptest",
//           name: "Alice",
//           email: 42,
//           result: true,
//         },
//         {
//           id: 3,
//           ownership: "Personal",
//           purchasedDate: "2022-05-08",
//           address: "ptest",
//           name: "Jay",
//           email: 45,
//         },
//         {
//           id: 4,
//           ownership: "UniSA",
//           purchasedDate: "2022-05-11",
//           address: "ptest",
//           name: "John",
//           email: 16,
//         },
//         {
//           id: 5,
//           ownership: "Personal",
//           purchasedDate: "2022-05-07",
//           address: "ptest",
//           name: "Bob",
//           email: 436,
//         },
//         {
//           id: 6,
//           ownership: "Personal",
//           purchasedDate: "2022-05-06",
//           address: "ptest",
//           name: "Tom",
//           email: 150,
//         },
//         {
//           id: 7,
//           ownership: "UniSA",
//           purchasedDate: "2022-05-05",
//           address: "ptest",
//           name: "Tonny",
//           email: 44,
//         },
//         {
//           id: 8,
//           ownership: "Personal",
//           purchasedDate: "2022-05-04",
//           address: "ptest",
//           name: "Betty",
//           email: 36,
//         },
//         {
//           id: 9,
//           ownership: "UniSA",
//           purchasedDate: "2022-05-02",
//           address: "ptest",
//           name: "ellen",
//           email: 65,
//         },
//         {
//           id: 10,
//           ownership: "UniSA",
//           purchasedDate: "2022-05-01",
//           address: "ptest",
//           name: "ellen",
//           email: "frt5@gmail.com",
//         },
//       ],
//       info: [
//         {
//           id: 1,
//           ownership: "UniSA",
//           purchasedDate: "2022-05-10",
//           address: "ptest",
//           name: "Jon",
//           email: 35,
//         },
//       ],
//     };
//     this.changeDetailsDialogShow = this.changeDetailsDialogShow.bind(this);
//     this.handleDetailsClick = this.handleDetailsClick.bind(this);
//     this.handleChangePage = this.handleChangePage.bind(this);
//   }

//   handleBackClick() {
//     window.location.href = "/dashboard";
//   }

//   changeDetailsDialogShow(flag) {
//     this.setState({
//       detailsDialogShow: flag,
//     });
//   }

//   handleDetailsClick(id) {
//     this.setState({
//       detailsDialogShow: true,
//     });
//     this.setState({
//       info: this.state.taskList[id],
//     });
//   }

//   handleChangePage(event, newPage) {
//     this.setState({
//       page: newPage,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button
//           size="small"
//           onClick={this.handleBackClick}
//           startIcon={<ArrowBackIosNewIcon />}
//         >
//           Back to Dashboard
//         </Button>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {this.state.headers.map((title, index) => {
//                   return <TableCell key={index}>{title}</TableCell>;
//                 })}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.state.taskList.map((task, index) => {
//                 return (
//                   <TableRow key={index}>
//                     <TableCell>{task.ownership}</TableCell>
//                     <TableCell>{task.purchasedDate}</TableCell>
//                     <TableCell>{task.address}</TableCell>
//                     <TableCell>{task.name}</TableCell>
//                     <TableCell>{task.email}</TableCell>
//                     <TableCell>
//                       <ResultIcon flag={task.result} />
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[]}
//                   // colSpan={12}
//                   count={this.state.taskList.length}
//                   rowsPerPage={10}
//                   page={this.state.page}
//                   // SelectProps={{
//                   //     inputProps: {
//                   //         'aria-label': 'rows per page',
//                   //     },
//                   //     native: true,
//                   // }}
//                   onPageChange={this.handleChangePage}
//                   // onRowsPerPageChange={handleChangeRowsPerPage}
//                   // ActionsComponent={TablePaginationActions}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     );
//   }
// }

// export default WorkList;
