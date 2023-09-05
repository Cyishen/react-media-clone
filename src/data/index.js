import { useState } from 'react';
import { twitter, dogeCoin, dogHead, catHead, buy} from '../assets';

import { BiHomeCircle, BiHomeHeart, BiSearch, BiSearchAlt, BiBell, BiSolidBell } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { HiOutlineMail, HiMail } from 'react-icons/hi';
import { RiFileListLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';



export const YourInfo = {
    name: "chen yii.sh_cyi",
    img: catHead,
    at: "@chen.yi.shen"
}

export const NavbarItem = [
    {
        title: '首頁',
        id: 'Home',
        icon: <BiHomeCircle />,
        link: '/home',
    },
    {
        title: '探索',
        id: 'Explore',
        icon: <BiSearch />,
        link: '/explore',
    },
    {
        title: '通知',
        id: 'Notification',
        icon: <BiBell />,
        link: '/notification',
    },
    {
        title: '訊息',
        id: 'Massages',
        icon: <FiMail />,
        link: '/massages',
    },
    {
        title: '列表',
        id: 'Lists',
        icon: <RiFileListLine />,
        link: '/lists',
    },
    {
        title: '個人資料',
        id: 'Profile',
        icon: <BsFillPersonFill />,
        link: '/profile',
    },
]

export const FollowPerson = [
    {
        img: dogHead,
        name: "yii.sh",
        at: "@yii.sh",
        follow: "跟隨",
        id: 0,
    },
    {
        img: twitter,
        name: "Twitter x Clone",
        at: "@ccc",
        follow: "跟隨",
        id: 1,
    },
]

export const FooterIcon = [
    {
        title: '首頁',
        id: 'Home',
        icon: <BiHomeCircle />,
        link: '/home',
        isFilled: false,
        iconFilled: <BiHomeHeart />,
    },
    {
        title: '探索',
        id: 'Explore',
        icon: <BiSearch />,
        link: '/explore',
        isFilled: false,
        iconFilled: <BiSearchAlt />,
    },
    {
        title: '通知',
        id: 'Notification',
        icon: <BiBell />,
        link: '/notification',
        isFilled: false,
        iconFilled: <BiSolidBell />,
    },
    {
        title: '訊息',
        id: 'Massages',
        icon: <HiOutlineMail />,
        link: '/massages',
        isFilled: false,
        iconFilled: <HiMail />,
    },
]


export const usePostInteractions = () => {
    const [countComm, setCountComm] = useState(0)
    
    const [countHeart, setCountHeart] = useState(0)
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleClickComm = () => {
        setCountComm(countComm + 1)
    }
    const handleClickHeart = () => {
        setCountHeart( countHeart + (isHeartFilled ? -1 : 1))
        setIsHeartFilled(!isHeartFilled)
    }

    return {
        countComm,
        countHeart,
        isHeartFilled,
        handleClickComm,
        handleClickHeart,
    };
}

export const SamplePost = () => {
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
                            <img src={twitter} alt="User Avatar" /> 
                        </div>

                        <div className='feed-inner-post-content'>
                            <div className='feed-inner-user-name'>Twitter x Clone</div>
                            
                            <div className='feed-inner-post'>
                                To the Moon 🚀 🚀 💪<br />
                            </div>

                            <div className='feed-inner-media'>
                                <div className='feed-inner-media-img'>
                                    <img src={dogeCoin} alt='dogeCoin'/>
                                </div>
                            </div>

                            <div className='feed-inner-icon-area'>
                                <div className='feed-inner-icon-flex'>
                                    <div className='feed-inner-icon-massage'>
                                        <div className='feed-inner-icon-comm' onClick={handleClickComm}><FaRegComment /></div>
                                        <div className='feed-inner-icon-comm-count'>{`${countComm + 50}`}</div>
                                    </div>
                                    <div className='feed-inner-icon-love'>
                                        <div 
                                            className={`feed-inner-icon-heart ${isHeartFilled ? 'is-active' : ''}`}
                                            onClick={handleClickHeart}
                                            >
                                            {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                                        </div>
                                        <div className='feed-inner-icon-heart-count'>{`${countHeart + 200}`}</div>
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

export const SamplePostB = () => {
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
                            <img src={dogHead} alt="User Avatar" /> 
                        </div>

                        <div className='feed-inner-post-content'>
                            <div className='feed-inner-user-name'>yii.sh</div>
                            
                            <div className='feed-inner-post'>
                                小孩才選擇 <br /> 🤩 🤩 🤩 
                            </div>

                            <div className='feed-inner-media'>
                                <div className='feed-inner-media-img'>
                                    <img src={buy} alt='buy'/>
                                </div>
                            </div>

                            <div className='feed-inner-icon-area'>
                                <div className='feed-inner-icon-flex'>
                                    <div className='feed-inner-icon-massage'>
                                        <div className='feed-inner-icon-comm' onClick={handleClickComm}><FaRegComment /></div>
                                        <div className='feed-inner-icon-comm-count'>{`${countComm + 10}`}</div>
                                    </div>
                                    <div className='feed-inner-icon-love'>
                                        <div 
                                            className={`feed-inner-icon-heart ${isHeartFilled ? 'is-active' : ''}`}
                                            onClick={handleClickHeart}
                                            >
                                            {isHeartFilled ? <FaHeart /> : <FaRegHeart />}
                                        </div>
                                        <div className='feed-inner-icon-heart-count'>{`${countHeart + 100}`}</div>
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