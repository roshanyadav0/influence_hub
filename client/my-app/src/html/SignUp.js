import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/SignUp.css'
import axios from 'axios';

const domain=process.env.REACT_APP_DOMAIN;


function SignUp() {
    const navigate=new useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        
        try {
            // Make a POST request to the signup endpoint
            const response = await axios.post(`http://localhost:5000/app/user/signup`, formData);
            console.log('Signup successful:', response.data);

            navigate(`/?username=${formData.username}`);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };


    return (
        <div className="main-div-7" >
            <div className="signup-section">
                <form id="main-div-7" onSubmit={handleSignup}>
                    
                    <input type="text"
                    id='input-box'
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder='Username'>
                    </input>

                    <input type="email"
                    id='input-box'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} placeholder='Email'>
                    </input>

                    <input type="password"
                    id='input-box'
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange} placeholder='Password'>
                    </input>

                    <div id="terms">
                    <input id='check-box'  type='checkbox'></input>
                        <p>I agree to the Influencer Hub <span>User Agreement</span> and <span>Privacy Policy</span></p>
                    </div>
                    <Button id="btn7" variant='outlined' type="submit" >Register</Button>
                    
                    <div>
                    <p>Already have an account ?</p>
                    <Button id="btn8" variant='contained' onClick={()=>navigate('/login')}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default  SignUp   
