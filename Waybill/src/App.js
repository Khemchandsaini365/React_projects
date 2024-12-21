import "./App.css";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Customer from "./Components/Customer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteWrapper from "./Wrapper/RouteWrapper";
import RechargeHistory from "./Components/RechargeHistory";
import Usage from "./Components/Usage";

function App() {
  return (
    <BrowserRouter>
      <RouteWrapper
        childComponent={
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Login" Component={Login} />
            <Route path="/Dashboard" Component={Dashboard} />
            <Route path="/Customer" Component={Customer} />
            <Route path="/rechargehistory" Component={RechargeHistory} />
            <Route path="/usage" Component={Usage} />
          </Routes>
        }
      />
    </BrowserRouter>
  );
}

export default App;
