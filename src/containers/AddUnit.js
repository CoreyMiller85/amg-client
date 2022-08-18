import amgDatabase from '../features/api';
import React, { useState, useEffect } from 'react';
import InputComponent from '../components/InputComponent';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddUnit = () => {
  const navigate = useNavigate();
  const [communityList, setCommunityList] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    CommunityId: '',
  });

  useEffect(() => {
    getCommunities();
  }, []);

  const getCommunities = async () => {
    const res = await amgDatabase.get('/community');
    setCommunityList(res.data);
  };

  const handleChange = (e) => {
    setData({ ...data, address: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    amgDatabase
      .post('/unit/create', data)
      .then((data) => navigate('/units', { replace: true }))
      .catch((err) => console.log(err));
  };

  const handleChangeCommunity = (e) => {
    setData(() => {
      const target = e.target.value;
      const com = communityList[target];
      return {
        ...data,
        city: com.city,
        state: com.state,
        zip: com.zip,
        CommunityId: com.id,
      };
    });
  };

  const handleClear = () => {
    // setAddress('');
    // setCity('');
    // setState('');
    // setZip('');
    // setcommunityId('');
  };

  const renderCommunityList = communityList.map((community, i) => {
    return (
      <option key={community.name + community.i} value={i}>
        {community.name}
      </option>
    );
  });

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
        <InputComponent
          componentName='Unit Address'
          inputName='address'
          handleChange={handleChange}
          value={data.address}
        />
        <label htmlFor='community-select'>Select Community: </label>
        <select
          name='community-select'
          onChange={(e) => handleChangeCommunity(e)}
        >
          <option>Select Community</option>
          {renderCommunityList}
        </select>

        <button onClick={handleClear}>Clear</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddUnit;
