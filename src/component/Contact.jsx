import React from 'react'
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import support_ from './support_.png'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function Contact(onBack) {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-5 px-10 '>
        <Link to='/home'><button  className='text-white text-2xl'>
          <FaArrowLeft />
        </button></Link>
        <h1 className='text-white font-bold text-3xl  ml-3'>Support</h1>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-5 px-4 border-spacing-2">
        <div className='border-violet-500 relative  px-5  mt-12 '>
        <div className='flex justify-center items-center my-2'>
            <img src={support_} alt=""  />
        </div>
        <div className='flex justify-center items-center text-black text-3xl my-4 font-bold'>
            Get Support
        </div>
        <div className='flex flex-col text-gray-500 text-lg py-5'>
       <p> For any support request regards your queries and </p>
            <p>problem please feel free to speak with us at below.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-black font-semibold'>
       <p>Call us - +91 7838XXXXXX</p> 
       <p> Mail us - maniterpteam@gmail.com</p>
        </div>
      </div>
        <Navbar/>
      </div>
    </div>
  )
}

export default Contact
