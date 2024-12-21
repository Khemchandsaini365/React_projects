import React from "react";
import img1 from "../Images/Stories-modified.png";
import img2 from "../Images/Stories-modified (1).png";
import img3 from "../Images/Stories-modified (2).png";

const UserStories = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center gap-5"
      style={{ height: "300px" }}
    >
      {/* Box 1 */}
      <div className="box text-center" style={{ width: "200px" }}>
        <img
          src={img1}
          alt="Loomed in Love"
          className="p-1 img-fluid"
          style={{ border: "2px solid pink", borderRadius: "100px" }}
        />
        <p>Loomed in Love</p>
      </div>

      {/* Box 2 */}
      <div className="box text-center" style={{ width: "200px" }}>
        <img
          src={img2}
          alt="Review Treasury"
          className="p-1 img-fluid"
          style={{ border: "2px solid pink", borderRadius: "100px" }}
        />
        <p>Review Treasury</p>
      </div>

      {/* Box 3 */}
      <div className="box text-center" style={{ width: "200px" }}>
        <img
          src={img3}
          alt="Brides Of Nakhrali"
          className="p-1 img-fluid"
          style={{ border: "2px solid pink", borderRadius: "100px" }}
        />
        <p>Brides Of Nakhrali</p>
      </div>
    </div>
  );
};

export default UserStories;
