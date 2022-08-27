import React from 'react';
import pic from "./slayer.jpg";
import "./profile.css"

const ProfilePhoto = () => {
  return (
    <div className='pic'>
        <img src={pic} alt="PIC" />
    </div>
  )
}

export default ProfilePhoto