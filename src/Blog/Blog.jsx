import PropTypes from 'prop-types';
import { FaBeer} from 'react-icons/fa';


const Blog = ({blog,bookmarkHandle,readTimeHandle}) => {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog
    return (
        <div>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4 my-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-base font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <h3 className='text-lg text-gray-500'>{reading_time} min read</h3>
                    <span className='w-6 text-gray-500 cursor-pointer'><FaBeer onClick={()=>bookmarkHandle(blog)}></FaBeer></span>
                    
                </div>
            </div>
            <h1 className='text-4xl font-bold w-[600px] leading-[50px]'>{title}</h1>
            <div className='flex gap-6 my-3 '>
            {
                hashtags.map((tag,inId) =><span key={inId}><p>#{tag}</p></span>)
            }
            </div>
            <h3 className='underline text-blue-600 font-medium mb-7 cursor-pointer' onClick={()=>readTimeHandle(blog)}>Mark as read</h3>
            
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object,
    bookmarkHandle:PropTypes.func,
    readTimeHandle:PropTypes.func

}
export default Blog;