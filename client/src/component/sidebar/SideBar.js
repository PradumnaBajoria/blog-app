import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'

function SideBar() {

    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img
                    className='sidebarImg'
                    alt='img'
                    src='https://us.123rf.com/450wm/asetrova/asetrova1709/asetrova170900095/86147094-hand-drawn-word-about-me.jpg?ver=6' 
                />
                <p>I am full stack developer</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map(cat => (
                        <Link className='link' to={`/?cat=${cat.name}`}>
                            <li className='sidebarListItems'>{cat.name}</li>
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar
