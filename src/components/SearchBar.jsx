import React from 'react';
import '../styles/SearchBar.css';
import { BiSearch } from 'react-icons/bi';
import { FollowPerson } from "../data";


const Follow = ( {img , name, at , follow} ) => {
  return (
    <div className="follow-part"> 
      <div className="follow-list">
          <img src={img} alt="User Avatar" />
          <div className="following-container">
            <div className="following-left">
              <div className="following-title">{name}</div>
              <div className="following-at">{at}</div>
            </div>
            <div className="follow-right">
              <div className="follow-btn">
                <div className="follow-word">{follow}</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

const SearchBar = () => {
  return (
    <div className="right-bar">
      <div className="container">
          <div className='top-block'>
            <div className="search-bar">
              <BiSearch className="search-icon" />
              <input type="text" placeholder="搜尋" className='search-input'></input>
            </div>
          </div>
          <div className="trends-box">
            <h2 className="trends-title">全球流行趨勢</h2>
              <div className="trending-content">
                  {Array.from( { length: 8 } ).map((_, i) => (
                    <div key={i} className='trending-part'>
                      <div  className="trending-list">
                        <div className="trending-title">{`${i + 1}．全球流行趨勢`}</div>
                        <div className="trending-hashtag">{`# 2023`}</div>
                        <div className="trending-number">6.14萬 posts</div>
                      </div>
                    </div>
                  ))}
              </div>
          </div>

          <div className="follow-box">
            <h2 className="follow-title">跟隨中</h2>
              <div className="follow-content">
                {
                  FollowPerson.map( (item, index) => (
                    <Follow {...item} key={index} />
                  ))
                }
              </div>
          </div>
      </div>
    </div>
  );
}

export default SearchBar;
