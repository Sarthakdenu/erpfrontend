import React from 'react';
import { FaClock, FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Notification = ({ onBack }) => {
  const notifications = [
    {
      id: 1,
      heading: "New Notification",
      imageSrc: "https://via.placeholder.com/150",
      time: "10:30 AM",
      date: "June 20, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      heading: "Alert",
      imageSrc: "https://via.placeholder.com/150",
      time: "11:15 AM",
      date: "June 21, 2024",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      heading: "Reminder",
      imageSrc: "https://via.placeholder.com/150",
      time: "1:00 PM",
      date: "June 22, 2024",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];
  const truncateContent = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-5 px-10 '>
     <Link to='/home'>  <button onClick={onBack} className='text-white text-2xl'>
          <FaArrowLeft />
        </button></Link> 
        <h1 className='text-white font-bold text-3xl ml-3'>Events, News & Notification</h1>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-5 px-4 border-spacing-2">
        <div className='border-violet-500 relative px-5 mt-12'>
          {notifications.map(notification => (
            <div key={notification.id} className="bg-gray-100 shadow-lg p-4 rounded-lg mb-4 ">
              <div className="flex items-center mb-2">
                <img src={notification.imageSrc} alt="Notification" className="w-15 h-15 rounded-lg object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold">{notification.heading}</h2>
                  <div className="flex items-center text-gray-500 text-sm ">
                   
                    <div> <span className='text-blue-600 flex py-3'> <FaClock className="mr-1 text-blue-500 " />{notification.date} at {notification.time}  </span>
                   <p className="text-gray-500">
                {truncateContent(notification.content, 100)}
              </p></div>
                  </div>
                </div>
              </div>
            
            </div>
          ))}
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Notification;
