import * as React from 'react';
import { styled } from '@mui/system';

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  const { value, onIncrement, onDecrement, min, max, ...rest } = props;

  return (
    <StyledInputContainer>
      <StyledSign className="decrement" onClick={onDecrement} disabled={value <= min}>
        -
      </StyledSign>
      <StyledInputWrapper>
        <StyledInput
          {...rest}
          value={value}
          ref={ref}
          readOnly
        />
      </StyledInputWrapper>
      <StyledSign className="increment" onClick={onIncrement} disabled={value >= max}>
        +
      </StyledSign>
    </StyledInputContainer>
  );
});

export default function QuantityInput() {
  const [value, setValue] = React.useState(1); // Initial value is 1
  const min = 1;
  const max = 99;

  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1); // Increase value
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1); // Decrease value
    }
  };

  return (
    <NumberInput
      value={value}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      min={min}
      max={max}
      aria-label="Quantity Input"
    />
  );
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

// Container for the input and signs
const StyledInputContainer = styled('div')(
  ({ theme }) => `
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 0px;
  padding: 0 8px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
`);

// Wrapper for the input field
const StyledInputWrapper = styled('div')(
  () => `
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
`);

// Styled input field
const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: transparent;
  border: none;
  width: 50px;
  text-align: center;
  padding: 6px 8px;
  
  &:focus {
    outline: none;
  }
`);

// Styled signs (+ and -)
const StyledSign = styled('span')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  cursor: pointer;
  padding: 4px;
  user-select: none;
  
  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 4px;
  }

  &.increment {
    order: 1;
  }

  &.decrement {
    order: 0;
  }
`,
);
