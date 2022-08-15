import React from 'react';

const Community = ({ name, city, state, zip }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        {city}, {state} {zip}
      </p>
    </div>
  );
};

export default Community;
