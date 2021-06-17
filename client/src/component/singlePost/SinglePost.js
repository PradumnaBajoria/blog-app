import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./SinglePost.css"
import { Link } from 'react-router-dom'


function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState([])
    const PF = "http://localhost:5000/images/"


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
        }
        getPost()
    }, [path])
    
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
                
                <h1 className='singlePostTitle'>
                    {post.title}
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : 
                        <Link className='link' to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesc'>
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost
