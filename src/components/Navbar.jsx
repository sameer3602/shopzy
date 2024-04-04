import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import shopzy from '../assets/shopzyicon.jpg'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='Navdiv'>
        <div className='Navcontent'>
            <div>
                <NavLink to="/">
                    <div className='logodiv'>
                        <img className="logoimage" src={shopzy}/>
                    </div>
                </NavLink>
            </div>
            <div className='Navdiv2'>
                <NavLink to="/">
                    <div className='Homelink'>
                        Home
                    </div>
                </NavLink>
                <NavLink to="/cart">
                    <div className='Cartlink'>
                        <FaCartShopping className='Cartlogo'/>
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
  );
}

export default Navbar;