import React, { useEffect, useState } from 'react'
import Header from '../../component/header/Header'
import Posts from '../../component/posts/Posts'
import SideBar from '../../component/sidebar/SideBar'
import "./Home.css"
import axios from "axios"

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  )
}

export default Home
