import React from 'react';

const SubmitTabsData = ({submitTab}) => {

    const {tab, bgClass} = submitTab;

    return (
        <div>
              <button className={`btn w-full hover:bg-white hover:text-black duration-300 ease-in-out ${bgClass}`}>{tab}</button> 
        </div>
    );
};

export default SubmitTabsData;