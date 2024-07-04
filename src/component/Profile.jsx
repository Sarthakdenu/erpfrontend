// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { FaLock, FaArrowLeft, FaCheck } from 'react-icons/fa';
import Navbar from './Navbar';
import { Link, useParams } from 'react-router-dom';
import { getStudent, updateStudent } from '../api';

const Profile = () => {
  const { studentuid } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const data = await getStudent(studentuid);
        setProfileData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentData();
  }, [studentuid]);

  const handleUpdate = async () => {
    try {
      const updatedData = { ...profileData };
      await updateStudent(profileData.institute_id, studentuid, updatedData);
      alert('Profile updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating profile');
    }
  };

  const renderLabelValuePair = (label, value) => (
    <div className="w-1/2 px-4 mb-4 bg-gray-100 p-2">
      <div className="flex justify-between items-center m-1 bg-gray-100">
        <span className="font-semibold">{label}</span>
        <FaLock className="text-gray-500" />
      </div>
      <div className="mt-1 text-gray-700">{value}</div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-start items-center mx-5 my-8 px-10 relative'>
        <Link to='/home'>
          <button className='text-white text-2xl'>
            <FaArrowLeft />
          </button>
        </Link>
        <h1 className='text-white font-bold text-3xl ml-3'>My Profile</h1>
        <button onClick={handleUpdate} className='absolute right-0 bg-white rounded-lg p-2 mr-6 text-blue-400 text-2xl flex items-center'>
          <FaCheck className='mr-1' /> Done
        </button>
      </div>
      <div id='registerdiv' className="bg-white rounded-t-full flex flex-col justify-center items-center py-2 px-4 border-spacing-2">
        <div className='border-violet-500 relative px-5 mt-2 justify-center items-center'>
          <div className="flex flex-col items-center py-5 px-4 bg-gray-100 min-h-screen justify-center rounded-lg">
            <div id='basicinfo' className="flex mb-6 border-blue-600 border-2 p-6 rounded-lg bg-gray-100">
              <img src={profileData.profilePic} alt="Profile" className="w-30 h-30 rounded-lg object-cover mr-6" />
              <div>
                <h1 className="text-2xl font-bold mb-2 text-black">{profileData.studentName}</h1>
                <p className='text-gray-600'><strong>Branch:</strong> {profileData.branch}</p>
                <p className='text-gray-600'><strong>Scholar Number:</strong> {profileData.scholarNumber}</p>
                <p className='text-gray-600'><strong>Hostel No:</strong> {profileData.hostelNo}</p>
                <p className='text-gray-600'><strong>Room No:</strong> {profileData.roomNo}</p>
                <p className='text-gray-600'><strong>Room Capacity:</strong> {profileData.roomCapacity}</p>
                <p className='text-gray-600'><strong>Room Active Date:</strong> {profileData.roomActiveDate}</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl border-black">
              <div className="bg-white shadow-lg rounded-lg p-6 w-full ">
                <div id='adharinfo' className="flex flex-wrap p-4 bg-slate-20 ">
                  {renderLabelValuePair("Date of Birth", profileData.dateOfBirth)}
                  {renderLabelValuePair("Nationality", profileData.nationality)}
                  {renderLabelValuePair("Aadhar Number", profileData.aadharNumber)}
                  {renderLabelValuePair("Gender", profileData.gender)}
                  {renderLabelValuePair("Phone Number", profileData.phoneNumber)}
                  {renderLabelValuePair("Alternate Phone Number", profileData.alternatePhoneNumber)}
                  {renderLabelValuePair("Disability", profileData.disability)}
                  {renderLabelValuePair("Category", profileData.category)}
                  {renderLabelValuePair("Father Name", profileData.fatherName)}
                  {renderLabelValuePair("Parent Mail ID", profileData.parentMailId)}
                  {renderLabelValuePair("Permanent Address", profileData.permanentAddress)}
                  {renderLabelValuePair("Present Address", profileData.presentAddress)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Profile;
