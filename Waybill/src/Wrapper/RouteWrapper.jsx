import React from "react";
import Header from ".././Components/Header";
import Sidebar from ".././Components/Sidebar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

export default function RouteWrapper({ childComponent }) {
  const location = useLocation();

  return location.pathname !== "/" && location.pathname !== "/login" ? (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-2 side">
          <Sidebar />
        </div>
        <div className="col-10 side2">
          <div className="scroll-box">
            {/* <Header /> */}
            {childComponent}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    childComponent
  );
}
