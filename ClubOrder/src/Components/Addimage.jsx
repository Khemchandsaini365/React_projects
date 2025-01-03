import React, { useState } from "react";
import img from "../Images/Add_image.png";
import { BiDownload } from "react-icons/bi";
const ImageUpload = () => {
  const [imageSrc, setImageSrc] = useState(null); // Stores the selected image's data URL
  // Handle file input change (when user selects an image)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  // Handle the image download (save image)
  const handleSaveImage = () => {
    if (imageSrc) {
      const link = document.createElement("a");
      link.href = imageSrc; // Use the image src as the download link
      link.download = "uploaded_image.jpg"; // Set a default filename
      link.click(); // Trigger the download
    }
  };

  return (
    <div className=" border border-dark m-1" style={{height:"300px",width:"300px"}}>
      {/* Image that triggers file input */}
      <div className="border border-dark" style={{height:"300px",width:"300px", }}>
      <img
        className="card-img"
        src={imageSrc || img} // Fallback image when no file is selected
        alt=" Select  image"
        onClick={() => document.getElementById("fileInput").click()}
        style={{
          cursor: "pointer",
          width: "100%",
        }}
      />
      </div>

      {/* Hidden file input for selecting an image */}
      <div className="border border-dark"> 

      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      </div>
          <div className="btn btn-outline-dark btn-sm " onClick={handleSaveImage} >
          <BiDownload/>
          </div>
      {/* Display the uploaded image and the save button */}
    </div>
  );
};

export default ImageUpload;
