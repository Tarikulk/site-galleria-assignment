import React from 'react';
import { Link } from 'react-router-dom';

const BottomButton = () => {
    return (
        <div className='mt-5 rounded-lg'>
        <div className="navbar bg-base-100 text-white"> 
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><Link to="/" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>ClEAR RESPONSE</Link></li>
            <li><Link to="/" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>REVIEW</Link></li>
            <li><Link to="/" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>DUMP</Link></li>
            <li><Link to="/" className='bg-primary shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>PREVIOUS</Link></li>
            <li><Link to="/" className='bg-blue-800 shadow-xl mr-1 h-10 hover:bg-white hover:text-black duration-300 ease-in-out'>NEXT</Link></li>
            </ul>
        </div>
        </div>
  </div>
    );
};

export default BottomButton;