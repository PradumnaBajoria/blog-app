import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./SinglePost.css"
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'


function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState([])
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try{
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace("/")
        }catch(err){
            window.alert("Some error occured!")
        }
    }

    const handleUpdate = async () => {
        try{
            await axios.put(`/posts/${post._id}`, {
                username: user.username, 
                title, 
                desc 
            })
            // window.location.reload()
            setUpdateMode(false)
        }catch(err){
            window.alert("Some error occured!")
        }
    }
    
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img
                    className='singlePostImg'
                    alt='img'
                    src={PF + post.photo}
                    // src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
                />
                )}
                {
                    updateMode ? <input 
                        type='text' 
                        value={title} 
                        className='singlePostTitleInput'
                        onChange={(e) => setTitle(e.target.value)} 
                        autoFocus 
                    /> : (
                        <h1 className='singlePostTitle'>
                            {title}
                            {post.username === user?.username && (
                                <div className='singlePostEdit'>
                                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                            
                        </h1>
                    )
                }
                
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : 
                        <Link className='link' to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? <textarea 
                        className='singlePostDescInput' 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                    /> : (
                        <p className='singlePostDesc'>
                            {desc}
                        </p>
                    )
                }
                {updateMode && (
                    <button 
                        className='singlePostButton' 
                        onClick={handleUpdate} 
                    >
                            Update
                    </button>
                )}
            </div>
        </div>
    )
}

export default SinglePost
