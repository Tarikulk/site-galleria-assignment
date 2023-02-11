import React from 'react';
import Profile from './Profile';
import QuestionPlate from './QuestionPlate';
import Review from './Review';
import Submit from './Submit';

const RightSideNav = () => {
    return (
        <div className='sm:mt-10 md:mt-15 lg:mt-16'>
           <Profile></Profile> 
           <QuestionPlate></QuestionPlate>
           <Review></Review>
           <Submit></Submit>
        </div>
    );
};

export default RightSideNav;