import React from 'react';

const QuestionPlateData = ({QuestionTab}) => {

    const {tab, bgClass} = QuestionTab;

    return (
        <div>
        <button className={`btn btn-square ${bgClass} hover:bg-white hover:text-black duration-300 ease-in-out shadow-xl`}>{tab}</button> 
        </div>
    );
};

export default QuestionPlateData;