import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div>
            <div className="navbar bg-gradient-to-r from-primary to-secondary text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label> 
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Exam Panel</Link>
  </div>
  <div className="navbar-center hidden lg:flex"> 
  </div>
  <div className="navbar-end">
    <Link className="btn bg-white text-purple-800 hover:bg-white">Login</Link>
  </div>
</div>
        </div>
        </div>
    );
};

export default Navbar;