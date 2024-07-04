import React from 'react';
import { FaBell, FaRegListAlt, FaCalendarAlt, FaClock, FaClipboardList } from 'react-icons/fa';
import ic_attendance from './ic_attendance.png';
import ic_fees_due from './ic_fees_due.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  const student = {
    name: 'John Doe',
    semster:4,
    branch: 'Computer Science',
    scholarNumber: '12345678',
    image: 'data:image/jpeg;base64,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'
  };

  return (
    <div id='homebox' className='flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-800 min-h-screen'>
      {/* Header Section */}
      <div className='w-full flex justify-between items-center p-5'>
        <div>
          <h1 className='text-white text-5xl font-bold py-2 ml-12'>Hi, {student.name}</h1>
          <p className='text-gray-200 text-xl font-semibold ml-12'>Branch : {student.branch}</p>
          <p className='text-gray-200 text-lg font-semibold ml-12'>Scholar Number : {student.scholarNumber}</p>
          <button className='bg-gradient-to-r from-yellow-100 to-yellow-100 ml-12 py-2 px-4 mt-2 text-lg font-medium border-1 border-black rounded-lg hover:bg-yellow-400'>
            Semester {student.semster}
          </button>
        </div>
        <div className='flex flex-col items-center ml-auto '>
          
         
        </div>
        <div className='text-white text-2xl ml-auto mr-5 flex flex-col justify-center items-center'>
          <Link to='/notification'><FaBell className='my-4 text-2xl'/></Link>
          <img 
            src={student.image} 
            alt="Student" 
            className='w-28 h-28 rounded-full border-3 border-cyan-400 '

          />
        </div>
        
      </div>

      {/* Main Content Section */}
      <div  className="bg-white w-full rounded-t-3xl flex flex-col items-center py-8">
        {/* Profile and Fees Section */}
        <div id='boxmain' className='flex justify-around  px-10 mb-8'>
         <div className='flex flex-col items-center border-4 border-gradient-to-r from-blue-400 to-purple-500 w-1/2 m-2 p-6 rounded-lg text-white bg-gray-300'>
         <Link to='/profile'>  <img src={ic_attendance} alt="Student Profile" className='w-16 h-16 mb-4 ' /></Link>
            <span className='text-2xl font-bold text-black'>Student Profile</span>
          </div>
          <div className='flex flex-col items-center border-4 border-gradient-to-r from-blue-400 to-purple-500 w-1/2 m-2 p-6 rounded-lg text-white bg-gray-300'>
          <Link to='/fee'>  <img src={ic_fees_due} alt="Fees Section" className='w-16 h-16 mb-4' /></Link>
            <span className='text-2xl font-bold text-black'>Fees Section</span>
          </div>
        </div>
        
        {/* Other Sections */}
        <div  id='boxmain' className='grid grid-cols-2 gap-6  px-10'>
          <div className='flex flex-col items-center  border-4 border-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg text-white bg-gray-200'>
            <FaRegListAlt className='text-4xl mb-2 text-blue-500'/>
            <span className='text-xl font-bold text-blue-600'>Results</span>
          </div>
          <div className='flex flex-col items-center border-4 border-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg text-white bg-gray-200'>
            <FaClipboardList className='text-4xl mb-2 text-blue-500'/>
            <span className='text-xl font-bold text-blue-600'>Registration</span>
          </div>
          <div className='flex flex-col items-center border-4 border-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg text-white bg-gray-200'>
            <FaClock className='text-4xl mb-2 text-blue-500'/>
            <span className='text-xl font-bold text-blue-600'>Exam Timetable</span>
          </div>
          <div className='flex flex-col items-center border-4 border-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg text-white bg-gray-200'>
            <FaCalendarAlt className='text-4xl mb-2 text-blue-500'/>
            <span className='text-xl font-bold text-blue-600'>Academic Calendar</span>
          </div>
        </div>
        <Navbar />
      </div>
      
    </div>
  );
}

export default Home;
