import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Loginpage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    userId: '',
    password: ''
  });
  const [registrationFormData, setRegistrationFormData] = useState({
    scholarNumber: '',
    collegeEmail: '',
    dob: '',
    phoneNumber: ''
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLoginSubmit = async () => {
    try {
      // Make API POST request for login
    
      const response = await fetch('your-login-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginFormData)
      });
      const data = await response.json();
      // Handle response from server (e.g., authentication success)
      console.log(data);
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error:', error);
    }
  };

  const handleRegistrationSubmit = async () => {
    try {
      // Make API POST request for registration
      const response = await fetch('your-registration-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationFormData)
      });
      const data = await response.json();
      // Handle response from server (e.g., registration success)
      console.log(data);
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error('Error:', error);
    }
  };

  const handleLoginInputChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistrationInputChange = (e) => {
    setRegistrationFormData({
      ...registrationFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <div className='mx-5 '>
          <img id='loginimg' src="https://s3-alpha-sig.figma.com/img/d872/98c7/55c39ea856ab14bb42d7b0457174e958?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUYq7~VScMeFJJjANoQExbKFuuUep6sx60GwxmIGdyuG~17cuNKuO22FVob7spXFgmLxvbAEaTDU4b3O8h0z7U~B4YfOLXns1tc5ddv4pLgqmIdzkhKoJsrDxN9EPF5-KAQiLhrwHGxnhSGa92t-zp9X0aCJyH77s5x46RM5yhJSlLSKRITu5T92UJQ37zNtwaW4~bgJSt7Oa0C3ImMr6lMZKqdCvlO3BMZvPfFPsuvZu780b9PKRvfR-~3gZ~zXVIfYYrvVKwOoUXDSCSU88wSzwOkdW7dns3T3hQ9za98eMNqHR3Vd5IbgOhBx4f1yeOBvFO7AtkOC4WONHEKdEQ__" alt="" />
        </div>
        <div className='mx-5 px-5 py-2 flex flex-col justify-center items-center '>
          <h1 className='text-white font-bold text-5xl py-2 '>
            {isRegistering ? 'Welcome!!' : 'Hi Student'}
          </h1>
          <p className='text-gray-200 font-semibold text-2xl py-2'>
            {isRegistering ? 'Sign up to Get Started' : 'Sign in to Continue'}
          </p>
        </div>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-2 border-spacing-2">
        <div className='border-violet-500 relative' id='mainloginarea'>
          {isRegistering ? (
            <div className='my-2'>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="scholarNumber" className='text-gray-500 font-semibold mt-5 text-lg'>Scholar Number</label>
                <input 
                  type="text" 
                  id="scholarNumber" 
                  name="scholarNumber" 
               
                  className='text-black border-b-2 border-blue-600'
                  value={registrationFormData.scholarNumber}
                  onChange={handleRegistrationInputChange}
                />
              </div>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="collegeEmail" className='text-gray-500 font-semibold mt-5 text-lg'>College Email ID</label>
                <input 
                  type="email" 
                  id="collegeEmail" 
                  name="collegeEmail" 
   
                  className='text-black border-b-2 border-blue-600'
                  value={registrationFormData.collegeEmail}
                  onChange={handleRegistrationInputChange}
                />
              </div>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="dob" className='text-gray-500 font-semibold mt-5 text-lg'>Date of Birth</label>
                <input 
                  type="date" 
                  id="dob" 
                  name="dob" 
                 
                  className='text-black border-b-2 border-blue-600'
                  value={registrationFormData.dob}
                  onChange={handleRegistrationInputChange}
                />
              </div>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="phoneNumber" className='text-gray-500 font-semibold mt-5 text-lg'>Registered Phone Number</label>
                <input 
                  type="text" 
                  id="phoneNumber" 
                  name="phoneNumber" 
                
                  className='text-black border-b-2 border-blue-600'
                  value={registrationFormData.phoneNumber}
                  onChange={handleRegistrationInputChange}
                />
              </div>
              <div className='flex justify-center items-center'>
                <Link to='/verifyotp'>
                <button id='getotpbutton'
                  className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 m-5 text-white font-bold rounded-lg'
                  onClick={handleRegistrationSubmit}
                >
                  Get OTP
                </button>
                </Link>
               
              </div>
            </div>
          ) : (
            <div>
              <div className='flex flex-col mx-2 text-lg'>
                <label htmlFor="userId" className='text-gray-500 font-semibold mt-5 text-lg'>Scholar No./User Id</label>
                <input 
                  type="text" 
                  id="userId" 
                  name="userId" 
                  placeholder='Enter the Scholar Number' 
                  className='text-black border-b-2 border-blue-600'
                  value={loginFormData.userId}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className='flex flex-col mx-2 text-lg relative'>
                <label htmlFor="password" className='text-gray-500 font-semibold mt-5 text-lg'>Password</label>
                <input 
                  type={passwordVisible ? 'text' : 'password'} 
                  id="password" 
                  name="password" 
                  placeholder='Enter the Password' 
                  className='text-black border-b-2 border-blue-600'
                  value={loginFormData.password}
                  onChange={handleLoginInputChange}
                />
                <span 
                  onClick={togglePasswordVisibility} 
                  className='absolute right-2 top-12 cursor-pointer'>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className='text-blue-400 text-xl m-2'>
              <Link to='/verifyotpchnge'><a href="">Forgot Password</a></Link>  
              </div>
              <div className='flex justify-center items-center'>
              <Link to='/home'>
                <button 
                id='loginbutton'
                  className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 m-3 text-white font-bold rounded-lg'
                  onClick={handleLoginSubmit}
                >
                  Login
                </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className='text-blue-500 font-semibold text-xl my-1 py-1'>
          <button onClick={handleToggleForm}>
            {isRegistering ? 'Already have an account? Login' : 'Not registered? Register'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
