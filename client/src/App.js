import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Forgot from "./pages/Forgot";
import Request from "./pages/Request";
import Dashboard from "./pages/Dashboarda/index";
import SelectItem from "./pages/SelectItem";
import Report from "./pages/Report";
import ExpireDate from "./pages/ExpireDate";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { locationInfo } from "./store/actions";
import History from "./pages/History";
function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    //Once the App running, fetch data

    locationInfo(dispatch);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<SelectItem />} />
          <Route path="/report" element={<Report />} />

          <Route path="/history" element={<History />} />
          <Route path="/expire-date" element={<ExpireDate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/request" element={<Request />} />
          <Route path="/tester" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
