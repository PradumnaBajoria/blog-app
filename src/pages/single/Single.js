import React from 'react'
import "./Single.css"
import SideBar from "../../component/sidebar/SideBar"
import SinglePost from '../../component/singlePost/SinglePost'

function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <SideBar />
        </div>
    )
}

export default Single
