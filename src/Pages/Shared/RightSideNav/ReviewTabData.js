import React from 'react';

const ReviewTabData = ({reviewTab}) => {

    const {tab, bgClass} = reviewTab;

    return (
        <div>
              <button className={`btn w-full hover:bg-white hover:text-black duration-300 ease-in-out ${bgClass}`}>{tab}</button> 
        </div>
    );
};

export default ReviewTabData;