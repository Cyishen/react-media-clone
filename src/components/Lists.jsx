import React from 'react';
import SearchBar from './SearchBar';  



const Lists = () => {

    return (
        <div id="lists" className='main-container-flex'>
            <div className='lists g-head-flex'>
                <div className='lists-head g-head'>
                    <div className='lists-head-content g-head-content'>
                        <div className="lists-title g-title">
                            <h2 className="lists-word">列表</h2>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar />
        </div>
    );
}

export default Lists;