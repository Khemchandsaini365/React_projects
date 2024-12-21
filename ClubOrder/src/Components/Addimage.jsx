import React, { useState } from "react";
import img from "../Images/Add_image.png";
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
    <div>
      {/* Image that triggers file input */}
      <img
        className="card-img"
        src={imageSrc || img} // Fallback image when no file is selected
        alt=" Select  image"
        onClick={() => document.getElementById("fileInput").click()}
        style={{
          cursor: "pointer",
          maxWidth: "100%",
        }}
      />

      {/* Hidden file input for selecting an image */}
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Display the uploaded image and the save button */}
    </div>
  );
};

export default ImageUpload;
