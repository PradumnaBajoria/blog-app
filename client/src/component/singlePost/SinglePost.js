import React from 'react'
import "./SinglePost.css"

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img
                    className='singlePostImg'
                    alt='img'
                    src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
                />
                <h1 className='singlePostTitle'>
                    Hello there
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : <b>Pradumna</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
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
        </div>
    )
}

export default SinglePost
