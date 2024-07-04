import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';

const Payment = () => {
  const { semester, amount } = useParams();

  const feeBreakup = {
    'Poor Student Fund': '₹500',
    'Student Medical Fund': '₹300',
    'Student Development Fund': '₹700',
    'Student Activity Fund': '₹100',
    'Examination Fee': '₹500',
    'Hostel Rent': '₹1000',
    'Hostel Maintenance Charges': '₹400',
    'Internet Fee': '₹200',
    'Central Computer Facility Fee': '₹300'
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-8 px-10 relative'>
        <Link to='/fee'>
          <button className='text-white text-2xl'>
            <FaArrowLeft />
          </button>
        </Link>
        <h1 className='text-white font-bold text-3xl ml-3'>Payment Details</h1>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-2 px-4 border-spacing-2">
        <div id='backupdiv'className='border-violet-500 relative px-5 mt-2 justify-center items-center'>
          <div id='feesDiv' className='bg-white rounded-t-lg p-6 border-spacing-2 justify-center items-center'>
            <div className='bg-white p-8 rounded-lg font-bold shadow-lg w-96 justify-center items-center'>
              <h2 className='text-2xl font-bold mb-4 justify-center text-blue-700 align-middle text-center'>Pay Now</h2>
              <div className='flex justify-between mb-2'>
                <p className='text-blue-500 font-bold'>Receipt No:</p>
                <p>123456789</p>
              </div>
              <div className='flex justify-between mb-2'>
                <p className='text-blue-500 font-bold'>Payment Date:</p>
                <p>N/A</p>
              </div>
              <div className='flex justify-between mb-2'>
                <p className='text-blue-500 font-bold'>Pending Amount:</p>
                <p>{amount}</p>
              </div>
              <div className='flex justify-between mb-2'>
                <p className='text-blue-500 font-bold'>Semester:</p>
                <p>{semester}</p>
              </div>
              <div className='mt-6'>
                <h2 className='text-2xl font-bold mb-4 bg-blue-600 rounded-lg p-3 text-white'>Fee Breakup</h2>
                {Object.entries(feeBreakup).map(([key, value], index) => (
                  <div key={index} className='flex justify-between mb-2'>
                    <p className='text-gray-500'>{key}:</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              <button id='downloadbtn'
                className='mt-4 text-white bg-gradient-to-r from-purple-500 to-blue-600 font-bold justify-center  hover:bg-blue-400 p-2 rounded flex  items-center'
              >
                Pay Now <FaDownload className='ml-2' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
