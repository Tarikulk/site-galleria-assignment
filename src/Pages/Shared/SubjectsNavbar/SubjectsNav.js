import React from 'react';
import { Link } from 'react-router-dom';

const SubjectsNav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 text-white"> 
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to="/all" className='bg-blue-800 shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>All Sections</Link></li>
                <li><Link to="/physics" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>PHYSICS</Link></li>
                <li><Link to="/chemistry" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>CHEMISTRY</Link></li>
                <li><Link to="/math" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>MATHS</Link></li>
                </ul>
            </div>
            </div>
            <div className="divider mt-0 sm:ml-0 md:ml-4 lg:ml-4"></div> 
      <div className='flex flex-row w-full justify-between items-center py-1 px-3 bg bg-gradient-to-r from-primary to-secondary text-white rounded-lg sm:ml-0 md:ml-3 lg:ml-3'>
        <p className='font-bold'> Question No: 1  </p>
        <div>
        <span className='font-bold mr-3'>View In: </span>
        <select className="select select-bordered bg-primary">
        <option>English</option>
        <option>Bangla</option>
        <option>Hindi</option>
        </select>
        </div>
      </div>
      </div>
    );
};

export default SubjectsNav;