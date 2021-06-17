import React, { useContext, useState } from 'react'
import "./Settings.css"
import SideBar from "../../component/sidebar/SideBar"
import { Context } from '../../context/Context'
import axios from 'axios'

function Settings() {
    const { user, dispatch } = useContext(Context)

    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState("")

    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            password
        }
        if(file){
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            updatedUser.profilePic = fileName
            try{
                await axios.post("/upload", data)
            }catch(err){
                window.alert("Some error Occured!!")    
            }
        }
        try{
            const res = await axios.put('/users/' + user._id, updatedUser)
            setSuccess(true)
            dispatch({ type:"UPDATE_SUCCESS", payload: res.data })
            // window.alert("Updated Successfully!") 
        }catch(err){
            window.alert("Username already taken!")  
            dispatch({type:"UPDATE_FALIURE"})
        }
    }


    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img
                            alt='img'
                            src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                            // src='https://i.pinimg.com/originals/e6/c1/4d/e6c14dd228b483f710ca30296bf3d71a.jpg' 
                        />
                        <label htmlFor='fileInput'>
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input 
                            type='file' 
                            id='fileInput' 
                            style={{display: 'none'}}
                            onChange={(e) => setFile(e.target.files[0])} 
                        />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder={user.username} onChange={e => setUsername(e.target.value)} />
                    <label>Email</label>
                    <input type='email' placeholder={user.email} disabled />
                    <label>Password</label>
                    <input type='password' onChange={e => setPassword(e.target.value)} required />
                    <button className='settingsSubmit' type='submit'>Update</button>
                    {success && <span style={{color:"green", textAlign:"center", margin:"10px"}}>Profile Updated(for changes to be applied please log in again)</span>}
                </form>
            </div>
            <SideBar />
        </div>
    )
}

export default Settings
