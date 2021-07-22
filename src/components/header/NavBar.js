import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const NavDiv = styled.div`
  width: 261px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  font-size: 1.1rem;
`;

export default function NavBar() {
  return (
    <NavDiv>
      <NavLink to="/search">Search</NavLink>
      <NavHashLink smooth to="/#HowitWorks">How it works</NavHashLink>
      <NavHashLink smooth to="/#About">About</NavHashLink>
    </NavDiv>
  );
}
