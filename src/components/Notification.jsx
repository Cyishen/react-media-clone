import React from 'react';
import SearchBar from './SearchBar';  



const Notification = () => {

    return (
        <div id="notification" className='main-container-flex'>
            <div className='notification g-head-flex'>
                <div className='notification-head g-head'>
                    <div className='notification-head-content g-head-content'>
                        <div className="notification-title g-title">
                            <h2 className="notification-word">通知</h2>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar />
        </div>
    );
}

export default Notification;