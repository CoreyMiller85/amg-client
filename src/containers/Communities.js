import React, { useState, useEffect } from 'react';
import amgDatabase from '../features/api';
import Community from '../components/Community';
import AddCommunity from './AddCommunity';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCommunities = styled.div`
  margin: 1rem;
`;

const Communities = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    getCommunities();
  }, []);

  const getCommunities = async () => {
    try {
      const data = await amgDatabase.get('/community');
      setCommunities(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const listCommunities = communities.map(({ name, city, state, zip }) => {
    return <Community name={name} city={city} state={state} zip={zip} />;
  });

  return (
    <StyledCommunities>
      <div>
        <h3>Add A Community</h3>
        <Link to={'/communities/add'}>Add Community</Link>
      </div>
      <h1>Community List</h1>
      {listCommunities}
    </StyledCommunities>
  );
};

export default Communities;
