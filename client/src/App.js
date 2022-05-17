import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Forgot from "./pages/Forgot";
import Request from "./pages/Request";
import Dashboard from "./pages/Dashboard";
import SelectItem from "./pages/SelectItem";
import Report from "./pages/Report";
import ExpireDate from "./pages/ExpireDate";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { locationInfo } from "./store/actions";
import History from "./pages/History";
import NotAvailableDate from "./pages/NotAvailableDate";
function App() {
  const dispatch = useDispatch();
  const [requestId, setRequestId] = React.useState();
  const [itemId, setItemId] = React.useState();
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
          <Route
            path="/report"
            element={<Report item_id={itemId} request_id={requestId} />}
          />

          <Route path="/history" element={<History />} />
          <Route
            path="/expire-date"
            element={<ExpireDate item_id={itemId} request_id={requestId} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/request" element={<Request />} />
          <Route
            path="/tester"
            element={
              <Dashboard setItemId={setItemId} setRequestId={setRequestId} />
            }
          />
          <Route path="/rest-date" element={<NotAvailableDate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
