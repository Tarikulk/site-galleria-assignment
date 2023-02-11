import React from 'react';
import QuestionPlateData from './QuestionPlateData';

const QuestionPlate = () => {

    const tabs = [
        {
            id : 1, 
            tab: "1",
            bgClass: "bg-green-500"
        },
        {
            id : 2, 
            tab: "2",
            bgClass: "bg-red-500"
        },
        {
            id : 3, 
            tab: "3",
            bgClass: "bg-green-500"
        },
        {
            id : 4, 
            tab: "4",
            bgClass: "bg-red-500"
        },
        {
            id : 5, 
            tab: "5",
            bgClass: "bg-green-500"
        },
        {
            id : 6, 
            tab: "6",
            bgClass: "bg-red-500"
        },
        {
            id : 7, 
            tab: "7",
            bgClass: "bg-green-500"
        },
        {
            id : 8, 
            tab: "8",
            bgClass: "bg-red-500"
        },
        {
            id : 9, 
            tab: "9",
            bgClass: "bg-green-500"
        },
        {
            id : 10, 
            tab: "10",
            bgClass: "bg-red-500"
        } 
    ]

    return (
        <div className='pb-8 pt-2 mt-2 mr-3 rounded-lg shadow-2xl h-96 mb-2'>
            <p className='bg-white ml-3 font-bold py-5 rounded-lg sm:mr-10 md:mr-6 lg:mr-3 mt-4'>Question Tab</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-2 mr-3'>
                {
                    tabs?.map( QuestionTab => <QuestionPlateData
                    key={QuestionTab.id}
                    QuestionTab={QuestionTab}
                    ></QuestionPlateData>)
                }
            </div>
        </div>
    );
};

export default QuestionPlate;