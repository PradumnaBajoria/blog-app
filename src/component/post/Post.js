import React from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"

function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                alt='img'
                src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Anime</span>
                    <span className='postCat'>Music</span>
                </div>
                <span className='postTitle'>
                    <Link className='link' to='/post/:postId'>
                        Hello There
                    </Link>
                </span>
                <hr />
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'>
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
                How are you all doing, this is the first blog. hope you like it.
            </p>
        </div>
    )
}

export default Post
