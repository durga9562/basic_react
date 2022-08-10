import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from './useInput';

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  align-items:center;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;
function App() {
  const inputProps = useInput();
  return (
    <div>
      <StyledInput
        {...inputProps}
        placeholder="Type in here"
      />
      <span>Value: {inputProps.value} </span>
    </div>
  );
}
export default App;