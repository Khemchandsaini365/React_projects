import React, { useState } from "react";

const SearchableDropdowns = ({ options, placeholder }) => {
  // State to store the filtered list of options
  const [filteredOptions, setFilteredOptions] = useState(options);
  // console.log(options);

  // State to control the input field's value
  const [inputValue, setInputValue] = useState("");
  // State to track whether the dropdown is open
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle input changes and filter options
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the options based on input value
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setInputValue(option); // Set input to selected option
    setIsOpen(false); // Close dropdown
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="position-relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        placeholder={placeholder}
        className="form-control"
      />
      {isOpen && (
        <ul
          className="list-group position-absolute w-100"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="list-group-item">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdowns;
