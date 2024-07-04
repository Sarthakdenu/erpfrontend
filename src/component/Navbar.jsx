import React from 'react';
import { FaHome, FaUserAlt, FaMoneyCheckAlt, FaRegListAlt, FaLifeRing } from 'react-icons/fa';
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id='navbar' className="flex bottom-4 left-0 right-0  items-center justify-center h-16 w-full gap-12 mt-16 mb-8">
     <Link to='/login'> <button className="flex mx-5 flex-col items-center justify-center py-2 px-4  text-gray-600  rounded-full hover:bg-blue-600  hover:text-white focus:outline-none mt-5">
        <FaRegListAlt className="mb-1 text-3xl" size={40} /> Register
      </button></Link>
      <Link to='/fee'><button className="flex mx-5 flex-col items-center justify-center py-2 px-4 text-gray-600 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none mt-5">
        <FaMoneyCheckAlt className="mb-1" size={40} /> PayFee
      </button></Link>
      <Link to='/home'><button className="flex  mx-5 items-center justify-center py-2 px-4 text-white bg-green-400 rounded-full hover:bg-green-600 hover:text-white focus:outline-none mt-5">
        <FaHome className="mb-1" size={80} />
      </button></Link>
      <Link to='/profile'><button className="flex mx-5 flex-col items-center justify-center py-2 px-4 text-gray-600  rounded-full hover:bg-blue-600 hover:text-white focus:outline-none mt-5">
        <FaUserAlt className="mb-1" size={40} /> Profile
      </button></Link>
      <Link to='/contact'><button className="flex mx-5 flex-col items-center justify-center py-2 px-4 text-gray-600 rounded-full hover:bg-blue-600  hover:text-white focus:outline-none mt-5">
        <MdOutlineSupportAgent className="mb-1" size={40} /> Support
      </button></Link>
    </div>
  );
};

export default Navbar;
