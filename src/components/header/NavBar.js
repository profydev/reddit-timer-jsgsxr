import React from 'react';
import NavLink from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="#">How it works</NavLink>
          </li>
          <li>
            <NavLink to="#">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
