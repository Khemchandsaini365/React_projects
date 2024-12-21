import React, { useState } from 'react';
import './btnstyles.css'; // Assuming you have a styles.css file

const SizeButtons = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleButtonClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="button-group">
      {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
        <button
          key={size}
          className={`size-button ${selectedSize === size ? 'selected' : ''}`}
          onClick={() => handleButtonClick(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeButtons;
