import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Forgot from "./pages/Forgot";
import Request from "./pages/Request";
import { AuthorisedDashboard, UserDashboard } from "./pages/Dashboard";
import SelectItem from "./pages/SelectItem";
import Report from "./pages/Report";
import ExpireDate from "./pages/ExpireDate";
import "react-calendar/dist/Calendar.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/" element={<SelectItem />} />
          <Route path="/report" element={<Report />} />

          <Route path="/expire-date" element={<ExpireDate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/request" element={<Request />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/tester" element={<AuthorisedDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
