import React, { useContext, useState } from 'react'
import "./Write.css"
import axios from "axios"
import { Context } from "../../context/Context"

function Write() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if(file){
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append("name", fileName)
            data.append("file", file)
            newPost.photo = fileName
            try{
                await axios.post("/upload", data)
            }catch(err){
                window.alert("Some error Occured!!")    
            }
        }
        try{
            const res = await axios.post('/posts', newPost)
            window.location.replace("/post/" + res.data._id)
        }catch(err){
            window.alert("Some error Occured!!")    
        }
    }

    return (
        <div className='write'>
            {file && 
                <img
                className='writeImg'
                alt='img'
                src={URL.createObjectURL(file)}
                // src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            />
            }
            
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input 
                        type='file' 
                        id='fileInput' 
                        style={{display: 'none'}} 
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <input 
                        type='text' 
                        placeholder='Title' 
                        className='writeInput' 
                        autoFocus={true} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='writeFormGroup'>
                    <textarea 
                        className='writeInput writeText' 
                        placeholder='Tell your story...' 
                        type='text'
                        onChange={(e) => setDesc(e.target.value)}
                    >

                    </textarea>
                </div>
                <button className='writeSubmit' type='submit' >Publish</button>
            </form>
        </div>
    )
}

export default Write
