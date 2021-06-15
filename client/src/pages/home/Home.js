import React from 'react'
import Header from '../../component/header/Header'
import Posts from '../../component/posts/Posts'
import SideBar from '../../component/sidebar/SideBar'
import "./Home.css"

function Home() {
    return (
      <>
        <Header />
        <div className='home'>
          <Posts />
          <SideBar />
        </div>
      </>
    )
}

export default Home
