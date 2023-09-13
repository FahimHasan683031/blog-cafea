import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between py-3 border-b border-gray-200 items-center'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img className='w-[50px]' src={profile} alt="" />
        </div>
    );
};

export default Header;