import React, { useState } from 'react';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SetProfile({ onBack }) {
  const [passwordVisible, setPasswordVisible] = useState({
    setPassword: false,
    securityAnswer: false
  });

  const [profileData, setProfileData] = useState({
    username: '',
    password: '',
    securityQuestion: '',
    securityAnswer: ''
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisible({
      ...passwordVisible,
      [field]: !passwordVisible[field]
    });
  };

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      // Make API POST request for setting profile
      const response = await fetch('your-profile-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(profileData)
      });
      const data = await response.json();
      // Handle response from server (e.g., profile update success)
      console.log(data);
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-5 px-10 '>
       <Link to='/verifyotp'> <button onClick={onBack} className='text-white text-2xl'>
          <FaArrowLeft />
        </button></Link>
        <h1 className='text-white font-bold text-3xl ml-3'>Set Profile</h1>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-5 px-4 border-spacing-2">
      <div className='border-violet-500 relative  px-5  mt-12'>
          <div    className='flex flex-col mx-2 text-lg'>
            <label htmlFor="username" className='text-gray-500 font-semibold mt-5 text-lg'>Set Username</label>
            <input 
              type='text' 
              id="username" 
              name="username" 
              placeholder='Enter Username' 
              className='text-black border-b-2 border-blue-600 w-full'
              value={profileData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col mx-2 text-lg relative'>
            <label htmlFor="password" className='text-gray-500 font-semibold mt-5 text-lg'>Set Password</label>
            <input 
              type={passwordVisible.setPassword ? 'text' : 'password'} 
              id="password" 
              name="password" 
              placeholder='Enter Password' 
              className='text-black border-b-2 border-blue-600 w-full'
              value={profileData.password}
              onChange={handleInputChange}
            />
            <span 
              onClick={() => togglePasswordVisibility('setPassword')} 
              className='absolute right-2 top-12 cursor-pointer'>
              {passwordVisible.setPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className='flex flex-col mx-2 text-lg'>
            <label htmlFor="securityQuestion" className='text-gray-500 font-semibold mt-5 text-lg'>Security Question</label>
            <select 
              id="securityQuestion" 
              name="securityQuestion" 
              className='text-black border-b-2 border-blue-600 w-full'
              value={profileData.securityQuestion}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select a security question</option>
              <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
              <option value="What was the name of your first pet?">What was the name of your first pet?</option>
              <option value="What was the make of your first car?">What was the make of your first car?</option>
              <option value="What is the name of the town where you were born?">What is the name of the town where you were born?</option>
            </select>
          </div>
          <div className='flex flex-col mx-2 text-lg relative'>
            <label htmlFor="securityAnswer" className='text-gray-500 font-semibold mt-5 text-lg'>Answer to Security Question</label>
            <input 
              type={passwordVisible.securityAnswer ? 'text' : 'password'} 
              id="securityAnswer" 
              name="securityAnswer" 
              placeholder='Enter Answer' 
              className='text-black border-b-2 border-blue-600 w-full'
              value={profileData.securityAnswer}
              onChange={handleInputChange}
            />
            <span 
              onClick={() => togglePasswordVisibility('securityAnswer')} 
              className='absolute right-2 top-12 cursor-pointer'>
              {passwordVisible.securityAnswer ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className='flex justify-center items-center'>
            <Link to='/home'>
            <button 
              className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 m-5 text-white font-bold rounded-lg'
              onClick={handleSubmit}
            >
              Submit Details
            </button>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}

export default SetProfile;
