
import axios from 'axios';

// Base URL of your server API
const API_URL ='http://localhost:3001';


// Create - Add a new student
export const addmember = (member) => {
    return axios.post(`${API_URL}/users`, member);
};





// // Read - Get all students
// export const getStudents = () => {
//     return axios.get(`${API_URL}/users`);
// };

// // Read - Get a single student by registration_number
// export const getStudentById = (id) => {
//     return axios.get(`${API_URL}/users/${id}`);
// };

// // Update - Update a student's details
// export const updateStudent = (registration_number, student) => {
//     return axios.put(`${API_URL}/users`, {registration_number, ...student});
// };

// // Delete - Remove a student by registration_number
// export const deleteStudent = (registration_number) => {
//     return axios.delete(`${API_URL}/users`,{data:{registration_number}});
// };