import React, { useState } from 'react';
import { FaCheck, FaArrowLeft, FaEye, FaArrowRight, FaDownload } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Fee = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedFee, setSelectedFee] = useState(null);

  const unpaidFees = [
    { semester: 'Spring 2024', amount: '₹5000' },
    { semester: 'Fall 2023', amount: '₹4500' },
  ];

  const paidFees = [
    { semester: 'Spring 2023', amount: '₹4000' },
    { semester: 'Fall 2022', amount: '₹3500' },
  ];

  const handlePayNow = (fee) => {
    setSelectedFee(fee);
    setModalType('pay');
    setShowModal(true);
  };

  const handleView = (fee) => {
    setSelectedFee(fee);
    setModalType('view');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFee(null);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-8 px-10 relative'>
        <Link to='/home'>
          <button className='text-white text-2xl'>
            <FaArrowLeft />
          </button>
        </Link>
        <h1 className='text-white font-bold text-3xl ml-3'>Fees Dues</h1>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-2 px-4 border-spacing-2">
        <div className='border-violet-500 relative px-5 mt-2 justify-center items-center'>
          <div id='feesDiv' className='bg-white rounded-t-lg p-6 border-spacing-2'>
            <div>
              <h2 className='text-2xl font-bold mb-4 bg-blue-600 rounded-lg p-3 text-white'>Unpaid Fees</h2>
              {unpaidFees.map((fee, index) => (
                <div key={index} className='flex justify-between items-center p-4 mb-4 bg-gray-100 rounded-lg border-t-8 border-b-2 border-b-gray-600 border-l-8 border-cyan-400'>
                  <div>
                    <p className='text-gray-500'>Semester: {fee.semester}</p>
                    <p>Amount: {fee.amount}</p>
                  </div>
                
                    <button onClick={() => handlePayNow(fee)} className='text-blue-500 bg-white hover:bg-blue-600 hover:text-white p-2 rounded flex items-center ml-auto'>
                      Pay Now <FaArrowRight className='ml-2' />
                    </button>
            
                  <div></div>
                </div>
              ))}
            </div>
            <div className='mt-6'>
              <h2 className='text-2xl font-bold mb-4 bg-blue-600 rounded-lg p-3 text-white'>Paid Fees</h2>
              {paidFees.map((fee, index) => (
                <div key={index} className='flex justify-between items-center p-4 mb-4 bg-gray-100 rounded border-t-8  border-l-8 border-cyan-300  border-b-2 border-b-gray-600'>
                  <div>
                    <p className='text-gray-500'>Semester: {fee.semester}</p>
                    <p>Amount: {fee.amount}</p>
                  </div>
                  <button
                    onClick={() => handleView(fee)}
                    className='text-blue-500 bg-white hover:bg-blue-600 p-2 hover:text-white shadow-teal-500 rounded flex items-center'
                  >
                    View <FaEye className='ml-2' />
                  </button>
                </div>
              ))}
            </div>
            <Navbar />
          </div>

          {showModal && (
            <div className='fixed bg-gradient-to-r from-blue-500 to-purple-800 inset-0  flex flex-col  justify-center items-center'>
              <div className="text-4xl my-3 text-white font-bold">
                <p>MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY</p>
              </div>
              <div className='py-4'>
                <img 
                  id='manitlogog' 
                  src="https://s3-alpha-sig.figma.com/img/d872/98c7/55c39ea856ab14bb42d7b0457174e958?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUYq7~VScMeFJJjANoQExbKFuuUep6sx60GwxmIGdyuG~17cuNKuO22FVob7spXFgmLxvbAEaTDU4b3O8h0z7U~B4YfOLXns1tc5ddv4pLgqmIdzkhKoJsrDxN9EPF5-KAQiLhrwHGxnhSGa92t-zp9X0aCJyH77s5x46RM5yhJSlLSKRITu5T92UJQ37zNtwaW4~bgJSt7Oa0C3ImMr6lMZKqdCvlO3BMZvPfFPsuvZu780b9PKRvfR-~3gZ~zXVIfYYrvVKwOoUXDSCSU88wSzwOkdW7dns3T3hQ9za98eMNqHR3Vd5IbgOhBx4f1yeOBvFO7AtkOC4WONHEKdEQ__" 
                  alt="MANIT Logo" 
                />
              </div>
              <div className='bg-white p-8 rounded-lg font-bold shadow-lg w-96'>
                <h2 className='text-2xl font-bold mb-4 justify-center text-blue-700 align-middle text-center'>
                  {modalType === 'pay' ? 'Pay Now' : 'View Receipt'}
                </h2>
                <div className='flex justify-between mb-2'>
                  <p className='text-blue-500 font-bold'>Receipt No:</p>
                  <p>123456789</p>
                </div>
                <div className='flex justify-between mb-2'>
                  <p className='text-blue-500 font-bold'>Payment Date:</p>
                  <p>{modalType === 'pay' ? 'N/A' : '2023-06-01'}</p>
                </div>
                <div className='flex justify-between mb-2'>
                  <p className='text-blue-500 font-bold'>Pending Amount:</p>
                  <p>{modalType === 'pay' ? selectedFee.amount : '₹0'}</p>
                </div>
                <div className='flex justify-between mb-2'>
                  <p className='text-blue-500 font-bold'>Semester:</p>
                  <p>{selectedFee.semester}</p>
                </div>
                {modalType === 'view' && (
                  <div className='flex justify-between mb-2'>
                    <p className='text-blue-500 font-bold'>Transaction Place:</p>
                    <p>Online Banking</p>
                  </div>
                )}
                <Link to={`/payment/${selectedFee?.semester}/${selectedFee?.amount}`}>
                  <button
                    onClick={closeModal}
                    className='mt-4 text-white bg-gradient-to-r from-purple-500 to-blue-600 font-bold justify-center  hover:bg-blue-400 p-2 rounded flex  items-center'
                  >
                    {modalType === 'pay' ? 'Pay Now' : 'Download'} <FaDownload className='ml-2' />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fee;
