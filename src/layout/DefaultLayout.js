import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import { useSelector } from 'react-redux';

const DefaultLayout = () => {
  const units = useSelector((state) => state.unitsData.value);
  return (
    <div>
      <NavBar />
      {units ? (
        <div>
          {units.map((unit) => {
            return <h3>{unit.address}</h3>;
          })}
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
