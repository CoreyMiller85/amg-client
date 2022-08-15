import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../containers/NavBar';

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
