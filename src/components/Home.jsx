import React from 'react';
import Feed from '../components/Feed'; 
import SearchBar from '../components/SearchBar'; 
import { YourInfo } from '../data';

const Home = () => {
    return (
        <div id="Home" className='main-container-flex'>
            <Feed userInfo={YourInfo}/>
            <SearchBar />
        </div>
    );
}

export default Home;