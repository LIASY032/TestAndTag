import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MenuLogin from "./components/MenuLogin";
import { useDispatch, useSelector } from "react-redux";
import { locationInfo } from "./store/actions";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Dashboard, { TaskPools, WorkList } from "./pages/Dashboard";
import CreateItem from "./pages/CreateItem";
import SubmitSuccess from "./pages/SubmitSuccess";
import OldItem from "./pages/OldItem";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  React.useEffect(() => {
    //Once the App running, fetch data

    locationInfo(dispatch);
  }, []);

  return (
    <Router>
      <MenuLogin name={userData.name} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new" element={<CreateItem />} />
        <Route path="/old" element={<OldItem />} />
        <Route path="/submit_success" element={<SubmitSuccess />} />
        <Route path="/work_list" element={<WorkList />} />

        <Route path="/task_pool" element={<TaskPools />} />
      </Routes>
    </Router>
  );
}

export default Home;
