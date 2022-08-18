import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledUnitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    height: 2rem;
  }
`;

const AddressSearch = () => {
  const [input, setInput] = useState('');

  const handleAddressSearch = (e) => {
    const query = e.target.value;
    setInput(query);
    axios.get('https://amg.cmiller.net/unit/');
  };

  return (
    <StyledUnitWrapper>
      <h2>Current Unit: </h2>
      <input
        type='text'
        onChange={(e) => {
          handleAddressSearch(e);
        }}
        value={input}
      />
    </StyledUnitWrapper>
  );
};

export default AddressSearch;
