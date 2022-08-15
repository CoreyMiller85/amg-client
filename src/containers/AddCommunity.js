import axios from 'axios';
import React, { useState } from 'react';
import InputComponent from '../components/InputComponent';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddCommunity = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('https://amgapi.cmiller.net/api/community/create', data)
      .then((data) => navigate('/communities', { replace: true }))
      .catch((err) => console.log(err));
  };

  const handleClear = () => {
    setData({
      name: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  const StyledAddCommunity = styled.div`
    margin: 1rem;
  `;

  return (
    <StyledAddCommunity>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
        <InputComponent
          componentName='Community Name'
          inputName='name'
          handleChange={handleChange}
          value={data.name}
        />
        <InputComponent
          componentName='City'
          inputName='city'
          handleChange={handleChange}
          value={data.city}
        />
        <InputComponent
          componentName='State'
          inputName='state'
          handleChange={handleChange}
          value={data.state}
        />
        <InputComponent
          componentName='Zipcode'
          inputName='zip'
          handleChange={handleChange}
          value={data.zip}
        />
        <button onClick={handleClear}>Clear</button>
        <button type='submit'>Submit</button>
      </form>
    </StyledAddCommunity>
  );
};

export default AddCommunity;
