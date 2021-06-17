import React from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"

function Post({ post }) {

    const PF = "http://localhost:5000/images/"

    return (
        <div className='post'>
            {post.photo && (
            <img
                className='postImg'
                alt='img'
                src={PF + post.photo}
                //src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            />
            )}
            <div className='postInfo'>
                <div className='postCats'>
                    {post.categories.map(cat => (
                        <span className='postCat'>{cat.name}</span>
                    ))}
                </div>
                <span className='postTitle'>
                    <Link className='link' to={`/post/${post._id}`}>
                        {post.title}
                    </Link>
                </span>
                <hr />
                <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {post.desc}
            </p>
        </div>
    )
}

export default Post
