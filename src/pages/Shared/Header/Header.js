import React from 'react';

const Header = () => {
  const menuItems = (
    <>
      <li>
        <p>About</p>
      </li>
      <li>
        <p>Projects</p>
      </li>
      <li>
        <p>Skills</p>
      </li>
      <li>
        <p>Contact</p>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <button className="btn btn-ghost normal-case text-xl">daisyUI</button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
