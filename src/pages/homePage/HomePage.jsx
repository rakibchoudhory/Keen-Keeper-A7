import React from 'react';
import Hero from './Hero';
import Hero4Card from './Hero4Card';
import AllFriends from '../../Component/AllFriends/AllFriends';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
           
            <Hero></Hero>
            <Hero4Card/>
            <AllFriends />
        </div>
    );
};

export default HomePage;