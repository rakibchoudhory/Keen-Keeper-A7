import React from 'react';

const Hero4Card = () => {
    return (
        <div className='my-10'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 border-b-2 border-gray-200'>
                <div className='rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold text-[#1F2937]'>10</h2>
                    <p className='text-base-content/60'>Total Friends</p>
                </div>
                <div className='rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold text-[#1F2937]'>3</h2>
                    <p className='text-base-content/60'>On Track</p>
                </div>
                <div className='rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold text-[#1F2937]'>6</h2>
                    <p className='text-base-content/60'>Need Attention</p>
                </div>
                <div className='rounded-md shadow-md shadow-base-content/5 transition hover:shadow-lg hover:-translate-y-1 text-center py-7 bg-white'>
                    <h2 className='text-3xl mb-2 font-bold text-[#1F2937]'>12</h2>
                    <p className='text-base-content/60'>Interactions This Month</p>
                </div>
                
            </div>
        </div>
        
    );
};

export default Hero4Card;