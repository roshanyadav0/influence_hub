import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/ProfileCard.css'

function ProfileCard ({ user }) {

    const navigate=new useNavigate();

    return (
        <div>
            <div className="influencercard">
                <div id="info">
                    <h2>{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Location: {user.city}</p>
                    <p>Description: {user.description}</p>
                    <p>Role: {user.role}</p>
                    </div>
                    <div>
                        <img onClick={()=>navigate(`/profile/?username=${user.username}`)} src={user.profilephoto} alt='error'></img>
                    </div>
                </div>
        </div>
    )
}

export default ProfileCard
