import React, { useState, useEffect } from 'react';
import amgDatabase from '../features/api';

const UnitList = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = () => {
    const results = amgDatabase
      .get('/unit/')
      .then((data) => setUnits(data.data))
      .catch((error) => console.log(error));
    return results;
  };

  const renderList = units.map((ele, i) => {
    return (
      <div key={ele.address + i}>
        <h3>{ele.address}</h3>
      </div>
    );
  });
  return <div>{units ? renderList : null}</div>;
};

export default UnitList;
