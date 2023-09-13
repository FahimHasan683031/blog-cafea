import PropTypes from 'prop-types';
const Sidebar = ({bookmarks,readTime}) => {
    return (
        <div className='w-1/3 mx-5'>
            <h1>Spent time on read : {readTime} min</h1>
            <div className="bg-gray-200 p-5 rounded-md">
                <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map((item,inId)=><h1 className="text-lg font-semibold p-5 rounded-md bg-white my-4" key={inId}>{item.title}</h1>)
                }
            </div>
        </div>
    );
};

Sidebar.propTypes={
    bookmarks:PropTypes.array,
    readTime:PropTypes.number
}

export default Sidebar;