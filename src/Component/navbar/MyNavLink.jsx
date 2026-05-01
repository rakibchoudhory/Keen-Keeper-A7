import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
        <li>
            <NavLink  to={to} className={({isActive}) => `flex items-center p-2 rounded-md font-semibold  text-gray-600 ${isActive && "bg-[#244d3f] text-white"}`}>
            {children}
        </NavLink>
        </li>
    );
};

export default MyNavLink;