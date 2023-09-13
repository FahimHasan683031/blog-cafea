import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({bookmarkHandle,readTimeHandle}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-2/3'>
            {
                blogs.map(blog=><Blog 
                    key={blog.id}
                    bookmarkHandle={bookmarkHandle}
                    readTimeHandle ={readTimeHandle}
                    blog={blog}></Blog> )
            }
        </div>
    );
};

Blogs.propTypes = {
    bookmarkHandle: PropTypes.func,
    readTimeHandle: PropTypes.func
}

export default Blogs;