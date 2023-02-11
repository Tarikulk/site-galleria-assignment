import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomButton from '../Pages/Shared/BottomButton/BottomButton';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import SubjectsNav from '../Pages/Shared/SubjectsNavbar/SubjectsNav';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-2 p-10'>
            <SubjectsNav></SubjectsNav> 
            <div className='shadow-2xl ml-3 mt-2 pb-64 px-2 rounded-lg'>
            <Outlet></Outlet>
            </div>
            <BottomButton></BottomButton>
            </div>
            <div className='mr-2'>
            <RightSideNav></RightSideNav>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;