import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const menuItems = <React.Fragment>
    <li className='font-medium'><Link to='/'>Home</Link></li>
    <li className='font-medium'><Link to='/about'>About</Link></li>
    <li className='font-medium'><Link to='/contact'>Contact</Link></li>
  </React.Fragment>;

  return (
    <div className="navbar bg-base-100 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl pl-0">
          {/* <img className='h-14' src={logo} alt="" /> */}
          <h2 className='text-2xl text-primary'>Portfolio</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a href='#contact' className="btn btn-outline btn-primary">Contact Me</a>
      </div>
    </div>
  );
};

export default NavBar;