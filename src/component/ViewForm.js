// ViewForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './viewForm.css'; // Import the CSS file

const ViewForm = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get('http://localhost:8000/api/formRoute/showAll');

      // Set the data in the state
      setFormDataList(response.data);

      // Log the response to the console (optional)
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Form Data</h1>
      <div className="card-container">
        {formDataList.map((formData) => (
          <div key={formData._id} className="card">
            <strong>Registered Brandname:</strong> {formData.registeredBrandname}<br />
            <strong>Number of Properties:</strong> {formData.numberOfProperties}<br />
            <strong>Property Name:</strong> {formData.propertyName}<br />
            <strong>Property Type:</strong> {formData.propertyType}<br />
            <strong>Phone Number:</strong> {formData.phoneNumber}<br />
            <strong>Email Address:</strong> {formData.emailAddress}<br />
            <strong>Address:</strong> {formData.address}<br />
            <strong>State:</strong> {formData.state}<br />
            <strong>City:</strong> {formData.city}<br />
            <strong>Pincode:</strong> {formData.pincode}<br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewForm;
