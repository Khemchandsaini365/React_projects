import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import RouteWrapper from "./RouterWrapper/RouterWrapper";
import Navbar from "./Components/Navbar";
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
import { token } from "./Secure";
import AllLogins from "./Components/AllLogins";
import AddNewClient from "./Components/AddNewClient";
import EditClient from "./Components/EditClient";
import AllOrdersList from "./Components/AllOrdersList";
import CardProducts from "./Components/CardProducts";
import AllReservation from "./Components/AllReservation";
import Reservation from "./Components/Reservation";
import NewResrevTable from "./Components/NewResrevTable";
import EditReservTable from "./Components/EditReservTable";
import Testing from "./Components/TestingComp";
import SearchableInput from "./Components/TestingComp";
import RoleForm from "./Components/TestingComp";
import BasicDatePicker from "./Components/TestingComp";
import DatePickers from "./Components/TestingComp";
import Example from "./Components/TestingComp";
import ModalpopOver from "./Components/ModalpopOver";

function App() {
  const isAuthenticated = token;

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
            {/* <Route path="/companydasboard/:companyId/:type/reservation/newtablereserve" element={<NewResrevTable />} />
            <Route path="/companydasboard/:companyId/:type/reservation/edittablereserve/:reserveID" element={<EditReservTable />} /> */}
            <Route path="/editClientLogin/:id" element={<EditClient />} />
            <Route path="/addNewClient" element={<AddNewClient />} />
            <Route path="/mob" element={<Example />} />
            <Route path="/test" element={<ModalpopOver />} />
          </Routes>
        }
      />
    </Router>
  );
}

export default App;
