// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://your-backend-url/api';

export const getStudent = async (studentuid) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/students/${studentuid}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching student data');
  }
};

export const updateStudent = async (institute_id, studentuid, studentData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/students/${institute_id}/${studentuid}`, studentData);
    return response.data;
  } catch (error) {
    throw new Error('Error updating student data');
  }
};
