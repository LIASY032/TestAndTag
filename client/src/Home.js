import React, { Component, Fragment } from "react";
// import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MenuLogin from "./components/MenuLogin";
import { useDispatch, useSelector } from "react-redux";
import { locationInfo } from "./store/actions";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Dashboard, { TaskDetails, TaskPools, WorkList } from "./pages/Dashboard";
import CreateItem from "./pages/CreateItem";
import SubmitSuccess from "./pages/SubmitSuccess";
import OldItem from "./pages/OldItem";
import Statistic from "./pages/Statistic";
import TaskPool from "./pages/Dashboard/TaskPool";
function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const [task, setTask] = React.useState();
  const [select, setSelect] = React.useState(0);

  const [selectLocation, setSelectLocation] = React.useState(0);
  React.useEffect(() => {
    //Once the App running, fetch data

    locationInfo(dispatch);
  }, []);

  //   let menu;
  //   if (userData.name) {
  //     menu = (
  //       <MenuLogin changeIsLogin={this.changeIsLogin} name={userData.name} />
  //     );
  //   } else {
  //     menu = <Menu />;
  //   }
  return (
    <Router>
      {/* {menu} */}
      <MenuLogin name={userData.name} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<CreateItem />} />
        <Route path="/old" element={<OldItem />} />
        <Route path="/submit_success" element={<SubmitSuccess />} />
        <Route path="/work_list" element={<WorkList />} />
        {/* <Route
          path="/work_details"
          element={
            <TaskDetails
              task={task}
              select={select}
              setSelectLocation={setSelectLocation}
              setSelect={setSelect}
              selectLocation={selectLocation}
            />
          }
        /> */}
        <Route
          path="/task_pool"
          element={
            <TaskPools
              setTask={setTask}
              select={select}
              setSelectLocation={setSelectLocation}
              setSelect={setSelect}
              selectLocation={selectLocation}
            />
          }
        />
      </Routes>
    </Router>
  );
}

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogin: false,
//       name: "Alice",
//     };
//     this.changeIsLogin = this.changeIsLogin.bind(this);
//   }

//   changeIsLogin(flag) {
//     console.log("change function:" + flag);
//     this.setState({
//       isLogin: flag,
//     });
//   }

//   render() {
//     let menu;
//     if (this.state.isLogin) {
//       menu = (
//         <MenuLogin changeIsLogin={this.changeIsLogin} name={this.state.name} />
//       );
//     } else {
//       menu = <Menu />;
//     }
//     return (
//       <Router>
//         {menu}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route
//             path="/sign_in"
//             element={<SignIn changeIsLogin={this.changeIsLogin} />}
//           />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/new" element={<CreateItem />} />
//           <Route path="/old" element={<OldItem />} />
//           <Route path="/submit_success" element={<SubmitSuccess />} />
//           <Route path="/work_list" element={<WorkList />} />
//           <Route path="/work_details" element={<TaskDetails />} />
//           <Route path="/task_pool" element={<TaskPool />} />
//           <Route path="/statistic" element={<Statics />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

export default Home;
