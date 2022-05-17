import React, {Component, Fragment} from "react";
import Menu from "./components/Menu";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import WorkCalendar from "./pages/WorkCalendar";
import CreateItem from "./pages/CreateItem";
import OldItem from "./pages/OldItem";
import SubmitSuccess from "./pages/SubmitSuccess";
import WorkList from "./pages/WorkList";
import Statics from "./pages/Statics";
import TaskDetails from "./pages/TaskDetails";

class Home extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sign_in" element={<SignIn />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/work_calendar" element={<WorkCalendar />} />
                    <Route path="/new" element={<CreateItem />} />
                    <Route path="/old" element={<OldItem />} />
                    <Route path="/submit_success" element={<SubmitSuccess />} />
                    <Route path="/work_list" element={<WorkList />} />
                    <Route path="/work_details" element={<TaskDetails />} />
                    <Route path="/statics" element={<Statics />} />

                </Routes>
            </Router>
        );
    }
}

export default Home;
