import React, { useEffect, useState  } from 'react';
import '../css/Profile.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Box_1 from './Box_1';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

const domain=process.env.REACT_APP_DOMAIN;


function Profile() {

    const navigate=new useNavigate();

    const [user, setUsers] = useState([]);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    {console.log(queryParams)};
    const username = queryParams.get('username');


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Make a GET request to fetch all users
                const response = await axios.get(`${domain}/app/user/${username}`);
                console.log(response.data);
                setUsers(response.data);
                console.log("sucessfully fetched the users");
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className='box-1'>
                <Box_1/>
            </div>
            <div className="main-div-8">
                <div className="main-content-5">
                    <div >
                        <div id="profile-description">
                                {console.log(user)}
                                            <img id="profile-photo" src={user.profilephoto} alt='profile-photo'></img>
                                            <h1>{user.username}</h1>
                                            <p>{user.firstName} {user.lastName}</p>
                                            <p>{user.email}</p>
                                            <p>{user.description}</p>
                                        </div>
                        
                        <div id='profile-details'>
                            <div>
                                <h1 onClick={()=>navigate(`/profiledetails/?username=${username}`)}>Profile Details</h1>
                            </div>
                        </div>
                        <div className="post-add" >
                                <h1>Post Add</h1>
                                <div>
                                    <form action="/your-handling-page" method="post" enctype="multipart/form-data">
                                        <label for="image">Select Image:</label>
                                        <input type="file" className="custom-file-upload" id="image" name="image" accept="image/*"></input>

                                        <label for="title">Title</label>
                                        <input type='text' id='title' name='title' ></input>

                                        <label for="description">Description:</label>
                                        <textarea id="description" name="description" rows="5"></textarea>

                                        <button type="submit">Post</button>
                                    </form>
                                </div>
                            </div>
                    </div>
                    <div id="profile-feature">
                        <div id="review">
                            <h1>Review</h1>
                        </div>
                        <div id="chat-box" >
                            <h1>Chats</h1>
                            <div id="chats" onClick={()=>navigate(`/chat/?chatname=${user.chatname}`)}>
                                <h4>Chat 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default  Profile 
