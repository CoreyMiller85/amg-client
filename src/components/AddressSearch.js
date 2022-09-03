import React, { useState } from 'react';
import styled from 'styled-components';
import amgapi from '../features/api';
import { useDispatch } from 'react-redux';
import { setUnits } from '../features/unitsSlice';
import { useEffect } from 'react';
import {
  setSearchingTrue,
  setSearchingFalse,
} from '../features/unitSearchSlice';

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
  const dispatch = useDispatch();

  useEffect(() => {
    let getData;
    if (input) {
      getData = setTimeout(() => handleAddressSearch(input), 500);
      dispatch(setSearchingTrue());
    } else {
      dispatch(setSearchingFalse());
    }
    return () => clearTimeout(getData);
  }, [input]);

  const handleAddressSearch = async (value) => {
    const results = await amgapi.get('/unit/?address=' + value);
    dispatch(setUnits(results.data));
  };

  return (
    <StyledUnitWrapper>
      <h2>Current Unit: </h2>
      <input
        type='text'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </StyledUnitWrapper>
  );
};

export default AddressSearch;
