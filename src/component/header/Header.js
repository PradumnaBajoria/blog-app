import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img 
                className='headerImg'
                src='https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270'
                alt='img' 
            />
        </div>
    )
}

export default Header
