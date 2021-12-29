
import Post from './post';

const posts = [
    {
        id: 458,
        username: 'dhaval_tarapara',
        userImg: '/avatar-1.png',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque quo odit ad amet!'
    },
    {
        id: 586,
        username: 'jayesh_tarapara',
        userImg: '/avatar-1.png',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque.'
    },
    {
        id: 745,
        username: 'sagar_chhatrola',
        userImg: '/avatar-1.png',
        caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
];

const Posts = () => {
    return (
        <div>
            {posts.map(post =>
                <Post  key={post.id} id={post.id} username={post.username} 
                userImg={post.userImg}
                caption={post.caption}
                 />
            )}

        </div>
    );
}

export default Posts;