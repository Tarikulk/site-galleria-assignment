import React from 'react';

const Physics = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'> 
           <div>
           <div  className='ml-3 mt-3'>
            <p className='bg-blue-700 rounded-lg py-2 text-white w-full'>Question Instruction</p>
            </div>
            <div>
            <p className='mx-6 mt-10 text-justify '>
                Passage you want to hit a small box on the floor with a marbel fired from a spring loaded gun that is mounted on a table. The target box is a distance R horizontally from the edge of the table; se the figure to right. You compress the spring a distance d, but the center of the marbels fall short by a distance r of the center of the box. How far should you compress the spring to score a direct hit ?
            </p>
            </div>
           </div> 


           <div>
           <div  className='ml-3 mt-3'>
            <p className='bg-blue-700 rounded-lg py-2 text-white w-full'>Question</p>
           </div>

           <div>
            <p className='mx-6 mt-10 text-justify '>
                 A block of mass m is projected with velocity V<sub>0</sub> as shown in the fig. The distance  between free ends is L<sub>0</sub> Maximum displacement of the block during the motion.
            </p>
            <img src='https://i.ibb.co/g7VCGGw/physics.png' className='shadow-2xl rounded-lg mt-5' />
            </div>

           </div>
        </div>
    );
};

export default Physics;