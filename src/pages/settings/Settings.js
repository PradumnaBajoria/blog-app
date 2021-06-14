import React from 'react'
import "./Settings.css"
import SideBar from "../../component/sidebar/SideBar"

function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img
                            alt='img'
                            src='https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg' 
                        />
                        <label htmlFor='fileInput'>
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Pradumna' />
                    <label>Email</label>
                    <input type='email' placeholder='pradumna@gmail.com' />
                    <label>Password</label>
                    <input type='password' />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}

export default Settings
