import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon
} from '@heroicons/react/outline';
const Post = ({ id, username, userImg, caption }) => {
    return (
        <div className='bg-white my-7 border rounded-sm'>
            {/* header */}
            <div className='flex items-center p-5'>
                <img src="/avatar-1.png"
                    className='rounded-full w-12 h-12 border p-1 mr-3'
                    alt="" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>
            {/* image */}
            <img src={userImg} className='object-cover w-full' alt="" />
            {/* button */}
            <div className='flex justify-between items-center px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>
            {/* caption */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username}</span>
                {caption}
            </p>
            {/* comments */}
            {/* input box*/}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7'/>
                <input type='text' placeholder='Add a comment...' className='border-none flex-1 focus:ring-0 outline-none' />
                <button className='font-semibold text-blue-400'>Post</button>
            </form>
        </div>
    );
}

export default Post;