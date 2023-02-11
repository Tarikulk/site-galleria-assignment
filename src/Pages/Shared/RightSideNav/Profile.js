import React from 'react';
import Countdown from '../../../Components/Countdown';

const Profile = () => {
    return (
        <div> 
        <div className="px-6 py-6 mr-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="avatar">
        <div className="w-24 rounded">
            <img src="https://i.ibb.co/XS557Pk/274467547-1111767866283383-7054671178087598912-n-2.jpg"/>
        </div>
        </div>
			<div className="space-x-2 text-center py-2 lg:py-0">
            <div>
            <p className='flex items-center ml-2'>
               <span className='mr-2 font-bold'>Time Left: </span> <Countdown seconds={300}></Countdown>
            </p>
            <p className='ml-2 mt-4 font-bold'>Name: Obayedullah</p>
        </div>
			</div>
		 
		</div>
	</div>
</div>
        </div>
    );
};

export default Profile;