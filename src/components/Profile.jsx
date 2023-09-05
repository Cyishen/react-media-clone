import React from 'react';
import SearchBar from './SearchBar'; 
import '../styles/Profile.css';

import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { YourInfo } from "../data";

const Profile = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div id="profile" className='main-container-flex'>
            <div className='profile g-head-flex'>
                    <div className='profile-head g-head'>
                        <div className='profile-head-content g-head-content'>
                            <div className="profile-title g-title">
                                <BsArrowLeft className='profile-arrow' onClick={handleBack}/>
                                <h2 className="profile-word">YS</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className='profile-second'>
                        <div className='profile-second-top'>
                        </div>
                        
                        <div className='profile-second-info'>
                            <div className='profile-second-block'>
                                <img 
                                    src={YourInfo.img} 
                                    width={140} 
                                    className='profile-second-image' 
                                    alt='User Avatar'
                                />
                            </div>
                            <div>name</div>
                            <div>@</div>
                            <div>follow</div>
                        </div>
                    </div>

            </div>
            <SearchBar />
        </div>
    );
}

export default Profile;