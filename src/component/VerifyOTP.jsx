import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';

function VerifyOTP({ onBack }) {
  const correctOtp = "123456"; // Simulated correct OTP value for demonstration

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60); // 60 seconds timer

  const { seconds, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('Timer expired')
  });

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const [isOtpCorrect, setIsOtpCorrect] = useState(false);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);

    // Check if OTP is complete
    if (newOtp.every(digit => digit !== "")) {
      setIsOtpComplete(true);
    } else {
      setIsOtpComplete(false);
    }

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const resendOtp = () => {
    const newExpiryTimestamp = new Date();
    newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 60);
    restart(newExpiryTimestamp);
    console.log('OTP resent');
  };

  const handleSubmitOtp = () => {
    const otpString = otp.join("");
    console.log('Submitted OTP:', otpString);
    if (otpString === correctOtp) {
      setIsOtpCorrect(true);
    } else {
      setIsOtpCorrect(false);
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-3'>
        <Link to='/login'>
        <button  className='text-white text-2xl'>
          <FaArrowLeft />
        </button>
        </Link>
        <h1 className='text-white font-bold text-3xl ml-3'>Verify OTP</h1>
      </div>
      <div className="bg-white rounded-t-full flex flex-col justify-center items-center py-5 px-4 border-spacing">
        <div id='maindiv' className='border-violet-500 relative px-5 mt-12'>
          <h2 className='text-black font-bold text-4xl my-2'>Enter Code</h2>
          <p className='text-gray-500 text-lg mb-4'>
            We’ve sent an SMS with an activation code to your phone +91-6254512178
          </p>
          <div className='flex justify-center'>
            {otp.map((data, index) => {
              return (
                <input
                  id='otpinput'
                  className={`m-2 border-2 text-black text-center text-2xl ${isOtpComplete ? 'border-green-500' : 'border-black'}`}
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={e => handleOtpChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
           
            
          </div >
          <p className='text-gray-500 text-sm my-4 flex flex-col'>
          {isOtpCorrect && (
              <h3 className='text-green-500 text-lg'>verification complete</h3>
          )}
            Send again in {seconds}s
           
          </p>
          <button 
            className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 my-2 text-white font-bold rounded-lg'
            onClick={resendOtp}
            disabled={seconds > 0}
          >
            Resend OTP
          </button>
          <button 
            className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 my-2 mx-3 text-white font-bold rounded-lg'
            onClick={handleSubmitOtp}
            disabled={!isOtpComplete}
          >
            Submit OTP
          </button>
          {isOtpCorrect && (
            <Link to='/setprofile'>
            <button 
              className='bg-gradient-to-r from-blue-400 to-purple-500 text-2xl px-10 py-2 my-2 mx-3 text-white font-bold rounded-lg'
              onClick={() => alert('Change Password clicked!')}
            >
              Set Profile
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
