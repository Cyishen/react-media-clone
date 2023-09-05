import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { NavbarItem } from "../data";

import { Link } from 'react-router-dom';


const Service = ( {title, icon , id, showTitles, link,} ) => {
  return (
      <Link to={link} className='link'>
        <div className="sidebar-unit">
          <div className="nav-icon">
            {icon}
          </div>
          
          {showTitles && (
            <div className="nav-label">
              {title}
            </div>
          )}
        </div>
      </Link>
  )
}

const Sidebar = () => {

  const [showTitles, setShowTitles] = useState(true)

  useEffect( () => {
    const handleResize = () => {
      setShowTitles(window.innerWidth > 1265)
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar-part">
        <div className="sidebar-content">
          <div className="logo-brand">
            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
          </div>

          <div className="sidebar-nav">
            <nav className="sidebar-list">
              {NavbarItem.map( (item) => (
                <Service {...item} showTitles={showTitles} key={item.id}/>
              ))}
            </nav>
          </div>

          <div className="publish-button round-publish-button">
            <Link to="/" className='link'>發布</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
