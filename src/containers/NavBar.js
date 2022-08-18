import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddressSearch from '../components/AddressSearch';

const StyledNav = styled.nav`
  background: #0982ff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
  }
  li {
    margin-right: 2rem;
    display: inline-block;
    font-size: 24px;
  }
  li a {
    text-decoration: none;

    color: black;
  }
`;

const StyledLogo = styled(Link)`
  margin-left: 2rem;
  display: inline-block;
  font-size: 24px;
  text-decoration: none;
  color: black;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <StyledLogo to='/'>AMG Tools</StyledLogo>
      <AddressSearch />
      <ul>
        <li>
          <Link to='/templates'>Templates</Link>
        </li>
        <li>
          <Link to='/communities'>Communities</Link>
        </li>
        <li>
          <Link to='/notes'>Notes</Link>
        </li>
        <li>
          <Link to='/addunit'>Add Unit</Link>
        </li>
        <li>
          <Link to='/units'>Unit List</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
