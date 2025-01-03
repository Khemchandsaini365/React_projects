import React, { useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { base_url } from '../env';

const ImageUploadComponent = ({imgSrc,compID,compToken}) => {
  const [imageSrc, setImageSrc] = useState(imgSrc); // Stores the selected image's data URL
  const compTokenvalue=compToken;
  
  const updateImage = () => {
    // Get the file input element
    const fileInput = document.getElementById("fileInput");

    if (fileInput && fileInput.files[0]) {
      const formdata = new FormData();
      // Append the necessary fields to the form data
      formdata.append(
        "Token",compTokenvalue
      );
      formdata.append("compID", compID); // Example compID, modify as needed
      formdata.append(
        "images",
        fileInput.files[0],
        fileInput.files[0].name       // The third argument should be the file name from the input
      );

      // Set up the request options
      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      // Send the request to the API
      fetch(`${base_url}/InsertCompanyimage`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("image uplaod success");
        })
        .catch((error) => console.error("Upload Error:", error));
    }
  };

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

  const handleSaveImage = () => {
    if (imageSrc) {
      const link = document.createElement("a");
      link.href = imageSrc; // Use the image src as the download link
      link.download = "uploaded_image.jpg"; // Set a default filename
      link.click(); // Trigger the download
    }
  };

  return (
    <div className="form-group row mb-2">
      <div className="col-sm-4" style={{ paddingLeft: "10%", fontWeight: 500 }}>
        <label className="control-label"> CompImage </label>
      </div>
      <div className="col-sm-8">
        <div
          style={{
            width: "200px",
            height: "200px",
            marginLeft:"10px",
            border: "1px solid black",
            cursor: "pointer",
            position: "relative", // To help position the image correctly
          }}
          className="d-flex justify-content-center align-items-center"
          onClick={() => document.getElementById("fileInput").click()}
        
        >
          <img
            src={imageSrc || "default-image-path.jpg"} // Default fallback image
            alt="Preview"
            style={{
              objectFit: "contain", // Maintain aspect ratio while fitting inside the container
              width: "100%", // Ensure the image scales based on the container width
              height: "100%", // Ensure the image scales based on the container height
              maxWidth: "100%", // Prevent the image from overflowing horizontally
              maxHeight: "100%", // Prevent the image from overflowing vertically
            }}
            width={"100%"}
            
          />
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {/* <div
          className="btn btn-outline-dark btn-sm"
          onClick={handleSaveImage}
        >
          <BiDownload />
        </div> */}
        <button onClick={updateImage} className="btn btn-primary btn-sm mt-2 ms-2">
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploadComponent;
