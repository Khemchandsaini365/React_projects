import React from "react";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";
import { FaLeftLong } from "react-icons/fa6";
import { FcLeft, FcUpLeft } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BackButton from "./BackButton";

const SubHeader = ({
  Name,
  hidebtn,
  newlicense,
  newcompany,
  showDrop,
  loactonData,
  companyId,
}) => {
  const navigate = useNavigate();
  const { type } = useParams();

  const handleEdit = () => {
    if (newlicense) {
      navigate(`/${newlicense}`);
    }
    if (newcompany) {
      navigate(`/${newcompany}`);
    }
  };

  const handleLocationRoute = (LocationName) => {
    navigate(`/company/${LocationName?.replaceAll(" ", "")}`, {
      state: companyId,
    });
  };

  const DropDown = () => {
    return (
      <>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            type="button"
            id="dropdownMenuButton"
            aria-expanded="false"
          >
            Locations
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {loactonData?.map((item, index) => {
              return (
                <h6
                  className="dropdown-item text-dark text-decoration-none"
                  onClick={() => handleLocationRoute(item?.locName)}
                >
                  {item?.locName}
                </h6>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* This form only visible in smaller screens than laptop */}

      {/* <form
        className="d-flex search  d-lg-none d-xl-none d-xxl-none m-3"
        id="search"
        role="search"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success " type="submit">
          Search
        </button>
      </form> */}

      {/* Form end */}
      {/* Drop Down for specific Club Locations */}

      <div className="container-fluid p-0  mt-2 d-flex justify-content-between">
        <div className="heading h4">
          <div className="d-inline p-0 mx-2">
            <BackButton />
          </div>
          {Name}
        </div>
        <div className="heading" onClick={handleEdit}>
          {hidebtn ? (
            ""
          ) : (
            <a name="" id="" class="btn btn-primary px-4" role="button">
              Add
            </a>
          )}
        </div>
        {showDrop && <DropDown />}
      </div>
    </>
  );
};

export default SubHeader;
