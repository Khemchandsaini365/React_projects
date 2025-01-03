import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteWrapper from "./RouterWrapper/RouterWrapper";
import Login from "./Components/Login";
import License from "./Components/License";
import Companies from "./Components/Companies";
import Apis from "./Components/Apis";
import Dashboard from "./Components/Dashboard";
import EditCompany from "./Components/EditCompany";
import NewCompany from "./Components/NewCompany";
import LicenseForm from "./Components/LicenseForm";
import NewLicenseForm from "./Components/NewLicenseForm";
import CompanyDashboard from "./Components/CompanyDashboard";
import ClubLocations from "./Components/ClubLocations";
import AllProductList from "./Components/AllProductList";
import AllLogins from "./Components/AllLogins";
import AddNewClient from "./Components/AddNewClient";
import EditClient from "./Components/EditClient";
import AllOrdersList from "./Components/AllOrdersList";
import Reservation from "./Components/Reservation";

import Example from "./Components/Test2";


function App() {

  return (
    <Router>
      <RouteWrapper
        childComponent={
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route path="/license" element={<License />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/api" element={<Apis />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allClients" element={<AllLogins />} />
            <Route
              path="/editcompany/:compID"
              element={
                <EditCompany heading="Edit Company Details" btn="update" />
              }
            />
            <Route
              path="/newcompany"
              element={<NewCompany heading="New Company Creation" />}
            />
            <Route
              path="/newlicense"
              element={<NewLicenseForm heading="License" />}
            />
            <Route
              path="/editlicense/:liceID"
              element={<LicenseForm heading="License" btn="update" />}
            />
            <Route
              path="/companydasboard/:companyId"
              element={<CompanyDashboard />}
            />
            <Route
              path="/companydasboard/:companyId/:type"
              element={<ClubLocations />}
            />
            <Route
              path="/companydasboard/:companyId/:type/productsList"
              element={<AllProductList />}
            />
            <Route
              path="/companydasboard/:companyId/:type/orderslist"
              element={<AllOrdersList />}
            />
            <Route
              path="/companydasboard/:companyId/:type/reservation"
              element={<Reservation />}
            />
            <Route path="/editClientLogin/:id" element={<EditClient />} />
            <Route path="/addNewClient" element={<AddNewClient />} />
            {/* <Route path="/test" element={<Example />} /> */}
          </Routes>
        }
      />
    </Router>
  );
}

export default App;
