import React from 'react';
import user from "./images/user.jpg";
import Button from '@mui/material/Button';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import NotificationsIcon from '@mui/icons-material/Notifications';

const User = () => {
  return (
   <>
        <div className="title-header">
        <h5>Booking Window</h5>
            </div>
            <div className="user-information">
                <div className="carcle">
                    <img src={user} className="img-fluid" alt="" srcSet="" />
                </div>
                <p>Jonathan pattan </p>
                <span className='usern'>User</span>
                <div className="icons">
                <span>
                    <Button variant="text" className='icon-color'>
                      <MarkEmailUnreadIcon/>
                    </Button>
                </span>
                <span>
                    <Button variant="text" className='icon-color'>
                        <NotificationsIcon/>
                    </Button>
                </span>
                </div>
            </div>
   </>
  )
}

export default User;
