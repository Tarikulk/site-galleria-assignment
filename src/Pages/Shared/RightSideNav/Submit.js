import React from 'react';
import SubmitTabsData from './SubmitTabsData';

const Submit = () => {

    const submitTabs = [
        {
            id : 1, 
            tab: "Profile",
            bgClass: "bg-cyan-500"
        },
        {
            id : 2, 
            tab: "Instr",
            bgClass: "bg-cyan-500"
        },
        {
            id : 3, 
            tab: "Questions",
            bgClass: "bg-cyan-500"
        },
        {
            id : 4, 
            tab: "Submit",
            bgClass: "bg-cyan-500"
        } 
    ]

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mr-3 shadow-2xl mb-10 px-4 py-4 rounded-lg'>
            {
                submitTabs?.map(submitTab => <SubmitTabsData
                key={submitTab.id}
                submitTab={submitTab}
                ></SubmitTabsData>)
            }
        </div>
    );
};

export default Submit;