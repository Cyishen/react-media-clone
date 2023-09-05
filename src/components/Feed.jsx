import React, { useState } from 'react';
import '../styles/Feed.css';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';

import { YourInfo, SamplePost, SamplePostB,  usePostInteractions } from "../data";
import { Link } from 'react-router-dom'; 

const PostArticle = ( {content} ) => {
  const { countComm, countHeart, isHeartFilled, handleClickComm, handleClickHeart } = usePostInteractions();

  return (
    <div className='feed-posts-content'>
      <article className='feed-posts-flex'>
        <div className='feed-posts-none'>
          <div className='feed-inner-top-block'>
            <div className='feed-inner-top-block-none'></div>
          </div>
          <div className='feed-inner-article-content'>
            <div className='feed-inner-img'>
              <img src={YourInfo.img} alt="User Avatar" /> 
            </div>

            <div className='feed-inner-post-content'>
              <div className='feed-inner-user-name'>
                {YourInfo.name.length > 14 ? (
                  <div className='ellipsis-text'>
                    {YourInfo.name.substring(0, 14)}...
                  </div>
                ) : (YourInfo.name)}
              </div>
              
              <div className='feed-inner-post'>
                {content}
              </div>

              <div className='feed-inner-icon-area'>
                <div className='feed-inner-icon-flex'>
                  <div className='feed-inner-icon-massage'>
                    <div className='feed-inner-icon-comm' onClick={handleClickComm}><FaRegComment /></div>
                    <div className='feed-inner-icon-comm-count'>{countComm}</div>
                  </div>

                  <div className='feed-inner-icon-love'>
                    <div 
                      className={`feed-inner-icon-heart ${isHeartFilled ? 'is-active' : ''}`}
                      onClick={handleClickHeart}
                    >
                      {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                    </div>
                    <div className='feed-inner-icon-heart-count'>{countHeart}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>   
  )
}


const Feed = () => {

  const [text, setText] = useState('')
  const [posts, setPosts] = useState([]);

  const [isTextOverflow, setIsTextOverflow] = useState(false);
  
  //mobile side display
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleModal = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleInputChange = (e) => {
    setText(e.target.value)
    // const newText = e.target.value
    //     if (newText.length <= 280) {
    //       setText(newText);
    //       setIsTextOverflow(false);
    //     } else {
    //       setIsTextOverflow(true);
    //     }
  }

  const handInputResize = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  const handlePublish = () => {
    if (text.trim() !== '') {
      const newPost = {
        id: Date.now(), 
        content: text
      };
      setPosts( (prevPosts) => [newPost, ...prevPosts]);
      setText('');
      resetTextareaHeight();
    }
  };
  const resetTextareaHeight = () => {
    const initialHeight = 55;
    const textarea = document.querySelector('.post-input');
    if (textarea) {
      textarea.style.height = `${initialHeight}px`;
    }
  };

  return (
    <div className={`feed ${isMobileOpen ? 'modal-open' : ''}`}>
      <div className='feed-head'>
        <div className="feed-head-content">
          <div className="feed-title">
            <img 
              src={YourInfo.img} 
              width={32} 
              className='mobile-user' 
              alt='User Avatar'
              onClick={toggleModal}
            />
            <h2 className="feed-word">首頁</h2>
          </div>
        </div>
      </div>

      {/* mobile sidebar */}
      <div className={`modal ${isMobileOpen ? 'open' : ''}`} onClick={toggleModal}>
          <div className="modal-content">
              <div className="modal-content-container">
                  <div className="modal-content-container-info">
                    <div className="modal-content-container-info-flex">
                      <img 
                        src={YourInfo.img} 
                        width={40} 
                        className='model-image' 
                        alt='User Avatar'
                      />
                      <div className="model-name">
                        <div className="model-name-name">{YourInfo.name}</div>
                        <div className="model-at">{YourInfo.at}</div>
                      </div>
                      <div className="model-follow"><strong style={{color: 'black'}}>100</strong> 個跟隨中</div>
                    </div>
                  </div>

                  <div className="modal-second">
                    <div className="modal-second-flex">
                      <Link to="/profile" className="modal-second-link">
                        <BsFillPersonFill className="modal-second-link-img"/>
                        <span>個人資料</span>
                      </Link>
                    </div>
                  </div>
              </div>
          </div>
      </div>

      <div className='feed-user'>
        <div className="feed-user-block">
          <div className='user-avatar'>
            <img src={YourInfo.img} alt="User Avatar" />
          </div>

          <div className='feed-user-content'>
            <div className='feed-user-typing-container'>
              <div className={`feed-user-typing ${isTextOverflow ? 'overflow' : ''}`}>
                <textarea 
                  className='post-input' 
                  placeholder='有什麼新鮮事？！' 
                  value={text} 
                  onChange={handleInputChange}
                  onInput={handInputResize}
                  style={{maxHeight: '200px', height: `${55}px`}}
                ></textarea>
              </div>
              <div className='feed-tools'>
                <button 
                  className='feed-publish-button' 
                  onClick={handlePublish}
                >發布
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="feed-inner-article">
        {posts.map( (post) => (
          <PostArticle key={post.id} content={post.content} />
        ))}

        {/* SamplePost 貼文範本 */} 
        <SamplePostB />
        <SamplePost />
      </div>
    </div>
  );
}



export default Feed ;

