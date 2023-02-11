import React from 'react';
import ReviewTabData from './ReviewTabData';

const Review = () => {

    const reviewTabs = [
        {
            id : 1, 
            tab: "Answer",
            bgClass: "bg-green-500"
        },
        {
            id : 2, 
            tab: "No Answer",
            bgClass: "bg-red-500"
        },
        {
            id : 3, 
            tab: "Review+Ans",
            bgClass: "bg-cyan-500"
        },
        {
            id : 4, 
            tab: "Review-Ans",
            bgClass: "bg-indigo-500"
        },
        {
            id : 5, 
            tab: "Dump",
            bgClass: "bg-purple-500"
        },
        {
            id : 6, 
            tab: "No Visit",
            bgClass: "bg-pink-500"
        } 
    ]

    return (
        <div className='mb-2 p-3 rounded-lg shadow-2xl mr-3'>
           <p className='bg-primary text-white sm:mr-10 md:mr-6 lg:mr-3 mt-4 rounded-lg py-2 font-bold'>Legend Click to View</p> 
           <div className='mt-2 mr-3'>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2'>
            {
                reviewTabs.map(reviewTab => <ReviewTabData
                    key={reviewTab.id}
                    reviewTab={reviewTab}
                    ></ReviewTabData>)
            }
            </div>
           <button className='btn w-full bg-gradient-to-r from-primary to-secondary text-white mt-2 hover:bg-white hover:text-black duration-300 ease-in-out'>10 All Question</button>
           </div>
        </div>
    );
};

export default Review;