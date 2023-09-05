import React, { useState } from 'react';
import { FooterIcon } from "../data";
import { Link, useLocation } from 'react-router-dom'; 

const MobileFooter = () => {
    const location = useLocation();

    const [footerIcons, setFooterIcons] = useState(FooterIcon)

    const handleIconClick = (clickedItem) => {
        const updatedIcons = footerIcons.map((item) => ({
            ...item,
            isFilled: item.id === clickedItem.id,
        }));
        setFooterIcons(updatedIcons);
    };

    return (
        <div className="menu-icons">
            {footerIcons.map( item => (
                <Link 
                    to={item.link} 
                    onClick={ ()=> handleIconClick(item)}
                    className={`menu-icon ${location.pathname === item.link ? 'selected' : ''}`}
                    key={item.id}
                >
                    {item.isFilled ? item.iconFilled : item.icon}
                </Link>
            ))}
        </div>
    );
}


export default MobileFooter;
