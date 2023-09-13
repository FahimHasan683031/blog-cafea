import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Header from './Header/Header'
import Sidebar from './Sidbar/Sidebar'


function App() {

  const [bookmarks, setBookmarks]=useState([])
  const [readTime, setReadTime]=useState(0)

  const bookmarkHandle = (blog)=>{
    setBookmarks([...bookmarks,blog])
   
  }
  const readTimeHandle = (blog)=> {
    setReadTime(readTime+blog.reading_time)
    const remaning = bookmarks.filter(item => item.id !== blog.id)
    setBookmarks(remaning)
  }

  return (
    <div className='max-w-screen-xl mx-auto px-5'>
      <Header></Header>
      <div className='md:flex mt-6'>
      <Blogs bookmarkHandle={bookmarkHandle} readTimeHandle={readTimeHandle} ></Blogs>
      <Sidebar className='w-1/3' bookmarks={bookmarks} readTime={readTime} ></Sidebar>
      </div>
    </div>
  )
}


export default App
