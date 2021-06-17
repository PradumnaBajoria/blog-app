import React, { useEffect, useState } from 'react'
import Header from '../../component/header/Header'
import Posts from '../../component/posts/Posts'
import SideBar from '../../component/sidebar/SideBar'
import "./Home.css"
import axios from "axios"
import { useLocation } from 'react-router'

function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

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
