import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import {FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li className="text-xl font-semibold hover:bg-slate-200">
        <Link>Home</Link>
      </li>
      <li className="text-xl font-semibold hover:bg-slate-200">
        <Link to="/order">Order</Link>
      </li>
      <li className="text-xl font-semibold hover:bg-slate-200">
        <Link>Dashboard</Link>
      </li>
      <li className="text-xl font-semibold hover:bg-slate-200">
        <Link to="/menu">Our Menu</Link>
      </li>
      <li className="text-xl font-semibold hover:bg-slate-200">
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link>
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+0</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          {" "}
          <button onClick={handleLogout} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          {" "}
          <li className="text-xl font-semibold hover:bg-slate-200">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-30 bg-opacity-80 bg-pink-600 text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Foodie Panda</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
