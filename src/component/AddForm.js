import axios from 'axios';
import React, { useState } from 'react'
import './addForm.css'

const AddForm = () => {
    const [formData, setFormData] = useState({
        registeredBrandname: '',
        numberOfProperties: '',
        propertyName: '',
        propertyType: '',
        phoneNumber: '',
        emailAddress: '',
        address: '',
        state: '',
        city: '',
        pincode: '',
      });
    
      // Handle form input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = async(e) => {
        e.preventDefault();
        // Perform actions with the form data, such as sending it to the server
        // console.log('Form Data:', formData);
        try {
            // Make a POST request to the API endpoint
            const response = await axios.post('http://localhost:8000/api/formRoute/addForm', formData);
      
            // Handle the response as needed
            console.log('API Response:', response.data);
      
            // Optionally, reset the form or perform other actions
            setFormData({
              registeredBrandname: '',
              numberOfProperties: '',
              propertyName: '',
              propertyType: '',
              phoneNumber: '',
              emailAddress: '',
              address: '',
              state: '',
              city: '',
              pincode: '',
            });
          } catch (error) {
            // Handle errors, e.g., display an error message
            console.error('Error:', error);
          }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Registered Brandname:
            <input
              type="text"
              name="registeredBrandname"
              value={formData.registeredBrandname}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          numberOfProperties:
            <input
              type="text"
              name="numberOfProperties"
              value={formData.numberOfProperties}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          propertyName:
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          propertyType:
            <input
              type="text"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          phoneNumber:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          emailAddress:
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          state:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          city:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
          pincode:
            <input
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              required
            />
          </label>
    
          {/* Repeat similar input fields for other properties in the schema */}
    
          <button type="submit">Submit</button>
        </form>
      );
}

export default AddForm