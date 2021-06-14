import React from 'react'
import { Link } from 'react-router-dom';
import "./TopBar.css"

function TopBar() {
    const user = true;
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/'>ABOUT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/'>CONTACT</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/write'>WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                        <img
                            className='topImg' 
                            alt='img' 
                            src='https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg'
                        />
                    ) : (
                        <ul className='topList'>
                            <Link className='link topListItem' to='/login'>LOGIN</Link>
                            <li><Link className='link topListItem' to='/register'>REGISTER</Link></li>
                        </ul>
                    )

                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
