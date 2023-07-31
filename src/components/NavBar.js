
import React from 'react';
import {  FaUser } from 'react-icons/fa';
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-left">
                 <h3>Travel1</h3>
      
            </div>
           <div className="nav-right">
            <h3>Travel3</h3>
            <h3>Travel4</h3>
                <h3>Travel5</h3>
                <FaUser className='user'/>
            </div>
        </div>
    );
}
export default NavBar;