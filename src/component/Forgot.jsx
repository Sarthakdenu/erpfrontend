import React from 'react'
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Forgot(onBack) {
    const [passwordVisible, setPasswordVisible] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false
      });
    
      const togglePasswordVisibility = (field) => {
        setPasswordVisible({
          ...passwordVisible,
          [field]: !passwordVisible[field]
        });
      };
    
      return (
        <div className='flex flex-col '>
          <div className='relative   flex justify-start items-center mx-5 my-5 px-10 '>
           <Link to='/verifyotpchnge'> <button className='text-white text-2xl'>
              <FaArrowLeft />
            </button></Link>
            <h1 className='text-white font-bold text-3xl ml-3'>Change Password</h1>
          </div>
          <div id='maindiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-3 border-spacing-2 ">
            <div className='border-violet-500 relative  px-5  mt-12'>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="oldPassword" className='text-gray-500 font-semibold mt-5 text-lg'>Old Password</label>
                <input 
                  type={passwordVisible.oldPassword ? 'text' : 'password'} 
                  id="oldPassword" 
                  name="oldPassword" 
                 
                  className='text-black border-b-2 border-blue-600'
                />
                <span 
                  onClick={() => togglePasswordVisibility('oldPassword')} 
                  className='absolute right-7 top-12 cursor-pointer mb-4'>
                  {passwordVisible.oldPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="newPassword" className='text-gray-500 font-semibold mt-5 text-lg'>New Password</label>
                <input 
                  type={passwordVisible.newPassword ? 'text' : 'password'} 
                  id="newPassword" 
                  name="newPassword" 
                 
                  className='text-black border-b-2 border-blue-600'
                />
                <span 
                  onClick={() => togglePasswordVisibility('newPassword')} 
                  className='absolute right-7 top-28 cursor-pointer mb-4'>
                  {passwordVisible.newPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="confirmPassword" className='text-gray-500 font-semibold mt-5 text-lg'>Confirm Password</label>
                <input 
                  type={passwordVisible.confirmPassword ? 'text' : 'password'} 
                  id="confirmPassword" 
                  name="confirmPassword" 
           
                  className='text-black border-b-2 border-blue-600'
                />
                <span 
                  onClick={() => togglePasswordVisibility('confirmPassword')} 
                  className='absolute right-7 top-44 cursor-pointer mb-4'>
                  {passwordVisible.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='flex justify-center items-center'>
               <Link to='/login'><button className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 m-5 text-white font-bold rounded-lg'>Change Password</button></Link> 
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Forgot
