import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';  // Importing TextField for input fields

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function Matrange() {
  const [value1, setValue1] = React.useState([299, 2000]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 9999 - minDistance); // Set max value to 9999
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box sx={{ width: 160 }}>
      {/* Slider 1 */}
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        max={9999} // Set max value to 9999
        sx={{
            color: "black",
            '& .MuiSlider-thumb': {
              width: 12, // Reduce the width of the thumb (dot)
              height: 12, // Reduce the height of the thumb (dot)
              backgroundColor: 'black', // Change thumb color to black
            },
          }}
      />

      {/* Input field to display the values of slider 1 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          value={value1[0]} // Display the lower value of the slider
          onChange={(e) => setValue1([Number(e.target.value), value1[1]])} // Allow manual input for lower value
          label="Min Value"
          variant="outlined"
          size="small"
          sx={{ width: 70 }}
        />
        <TextField
          value={value1[1]} // Display the upper value of the slider
          onChange={(e) => setValue1([value1[0], Number(e.target.value)])} // Allow manual input for upper value
          label="Max Value"
          variant="outlined"
          size="small"
          sx={{ width: 70 }}
        />
      </Box>

    

     
    </Box>
  );
}
