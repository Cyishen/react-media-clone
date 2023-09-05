import React from 'react';
import SearchBar from './SearchBar';  



const Explore = () => {

    return (
        <div id="explore" className='main-container-flex'>
            <div className='explore g-head-flex'>
                <div className='explore-head g-head'>
                    <div className='explore-head-content g-head-content'>
                        <div className="explore-title g-title">
                            <h2 className="explore-word">探索</h2>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar />
        </div>
    );
}

export default Explore;