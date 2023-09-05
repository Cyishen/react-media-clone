import React from 'react';
import SearchBar from './SearchBar';  



const Massages = () => {

    return (
        <div id="massages" className='main-container-flex'>
            <div className='massages g-head-flex'>
                <div className='massages-head g-head'>
                    <div className='massages-head-content g-head-content'>
                        <div className="massages-title g-title">
                            <h2 className="massages-word">訊息</h2>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar />
        </div>
    );
}

export default Massages;