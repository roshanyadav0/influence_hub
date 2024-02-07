import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Box_1 from './Box_1'
import Footer from './Footer'
import Select from 'react-select';
import '../css/ProfileDetails.css'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ProfileDetails() {

    const navigate=new useNavigate();


            const [formData, setFormData] = useState({
                    username:'',
                    email:'',
                    password:'',
                    firstName: '',
                    lastName: '',
                    role: 'admin',
                    address: {
                    section: '',
                    city: '',
                    postalCode: '',
                    state: '',
                    country: '',
                    },
                    company: {
                    companyName: '',
                    timezone: '',
                    location: '',
                    },
                    languages: [],
                });

                useEffect(() => {
                    const fetchUserData = async () => {
                        const fetchUserData = async () => {
                            try {
                                const response = await axios.get('https://influence-hub.onrender.com/api/user/user1');
                                setFormData(response.data);
                            } catch (error) {
                                console.error('Error fetching user data:', error);
                                // Handle error (e.g., display error message)
                            }
                        };
                        fetchUserData();
                    
                    };
            
                    fetchUserData();
                }, []); // Empty dependency array ensures useEffect runs only once when the component mounts
            
                const handleSubmit = async event => {
                    event.preventDefault();
            
                    try {
                        // Update the user data with PUT request
                        await axios.put(`https://influence-hub.onrender.com/api/user/${formData.username}`, formData);
                        alert('User data updated successfully!');
                    } catch (error) {
                        if (error.response && error.response.status === 404) {
                            // User not found, create a new user with POST request
                            try {
                                await axios.post('https://influence-hub.onrender.com/api/user', formData);
                                alert('User created successfully!');
                                console.log(formData)
;                            } catch (error) {
                                console.error('Error creating user:', error);
                                // Handle error (e.g., display error message)
                            }
                        } else {
                            console.error('Error updating user data:', error);
                            // Handle error (e.g., display error message)
                        }
                    }
                };

                const handleDelete = async () => {
                    try {
                        await axios.delete(`https://influence-hub.onrender.com/api/user/${formData.username}`);
                        alert('User data deleted successfully!');
                        // Clear the form data after deletion
                        handleClearForm();
                    } catch (error) {
                        console.error('Error deleting user data:', error);
                        // Handle error (e.g., display error message)
                    }
                };
            
                const handleInputChange = event => {
                    const { name, value } = event.target;
                    setFormData(prevState => ({
                        ...prevState,
                        [name]: value
                    }));
                };
            
                // For nested objects (e.g., address, company), you can use additional handleChange functions
                const handleAddressChange = event => {
                    const { name, value } = event.target;
                    setFormData(prevState => ({
                        ...prevState,
                        address: {
                            ...prevState.address,
                            [name]: value
                        }
                    }));
                };
            
                const handleCompanyChange = event => {
                    const { name, value } = event.target;
                    setFormData(prevState => ({
                        ...prevState,
                        company: {
                            ...prevState.company,
                            [name]: value
                        }
                    }));
                };
                
                
                // Handle language selection changes
                const handleLanguagesChange = (selectedOptions) => {
                    const selectedLanguages = selectedOptions.map((option) => option.value);
                    setFormData((prevData) => ({
                    ...prevData,
                    languages: selectedLanguages,
                    }));
                };
                
                // Handle form submission
                // const handleSubmit = async (e) => {
                //     e.preventDefault();
                
                //     try {
                //     // Send the form data to your backend API
                //     const response = await fetch('https://influence-hub.onrender.com/your-backend-endpoint', {
                //         method: 'POST',
                //         headers: {
                //         'Content-Type': 'application/json',
                //         },
                //         body: JSON.stringify(formData),
                //     });
                
                //     if (!response.ok) {
                //         window.alert("cant submit")
                //         throw new Error('Network response was not ok');
                //     }

                //     const fetchUserData = () => {
                //         axios.get('/api/user')
                //             .then(response => {
                //                 const { name, email } = response.data;
                //                 setUserData({ name, email });
                //             })
                //             .catch(error => console.error('Error fetching user data:', error));
                //     };
                
                //     // Handle the success response from your backend
                //     const data = await response.json();
                //     console.log('Success:', data);
                //     window.alert('Sucessfully Submited');
                //     navigate('/');
                    
                //     } catch (error) {
                //     // Handle errors
                //     window.alert(error);
                //     console.error('Error:', error);
                //     }
                // };
                
                // Clear the form data
                const handleClearForm = () => {
                    setFormData({
                    uername:'',
                    email:'',
                    password:'',
                    firstName: '',
                    lastName: '',
                    role: 'admin',
                    address: {
                        section: '',
                        city: '',
                        postalCode: '',
                        state: '',
                        country: '',
                    },
                    company: {
                        companyName: '',
                        timezone: '',
                        location: '',
                    },
                    languages: [],
                    });
                };
        
        
        const languageOptions = [
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Spanish' },
            { value: 'french', label: 'French' },
            { value: 'german', label: 'German' },
            // Add more language options as needed
        ];
    

    return (
        <div>
            <Navbar/>
            <div class="box-1">
                <Box_1/>
            </div>
            <div>
                    <div class="main-div-12">
                        <h2>Registration Form</h2>
                            <form onSubmit={handleSubmit}>
                            {/* Basic Information */}
                            <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                style={{ color: 'red' }}
                            />
                            </label>
                            <br />
                            <label>
                            Email:
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            Password:
                            <input
                                type="text"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                            </label>
                            <br />
                            <label>
                            Role:
                            <select name="role" value={formData.role} onChange={handleInputChange}>
                                <option value="admin">Admin</option>
                                <option value="team">Team</option>
                                <option value="influencer">Influencer</option>
                            </select>
                            </label>
                            <br />

                            {/* Address */}
                            <h3>Address</h3>
                            <label>
                            Address Section:
                            <input
                                type="text"
                                name="section"
                                value={formData.address.section}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            City/Town:
                            <input
                                type="text"
                                name="city"
                                value={formData.address.city}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            Postal Code:
                            <input
                                type="text"
                                name="postalCode"
                                value={formData.address.postalCode}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            State/Region:
                            <input
                                type="text"
                                name="state"
                                value={formData.address.state}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />
                            <label>
                            Country:
                            <input
                                type="text"
                                name="country"
                                value={formData.address.country}
                                onChange={handleAddressChange}
                            />
                            </label>
                            <br />

                            {/* Company Details */}
                            {formData.role !== 'influencer' && (
                            <>
                                <h3>Company Details</h3>
                                <label>
                                Company Name:
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.company.companyName}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                                <label>
                                Timezone:
                                <input
                                    type="text"
                                    name="timezone"
                                    value={formData.company.timezone}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                                <label>
                                Location:
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.company.location}
                                    onChange={handleCompanyChange}
                                />
                                </label>
                                <br />
                            </>
                            )}

                            {/* Languages */}
                            <h3>Languages</h3>
                            <h3>Languages</h3>
                            <Select
                            isMulti
                            name="languages"
                            value={languageOptions.filter((option) => formData.languages.includes(option.value))}
                            options={languageOptions}
                            onChange={handleLanguagesChange}
                            />
                            <br />
                            <button type="button" onClick={handleClearForm} >Clear Form</button>   
                            <button type="submit" >Submit</button>
                            <button type="button" onClick={handleDelete}>Delete</button>
                        </form>                
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
