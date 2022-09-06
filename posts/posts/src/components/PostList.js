import posts from '../data/posts';
import users from '../data/users';
import PostCard from './PostCard';

const PostList = () => {
    return (
        posts.map((post)=> {
            const user = users.find(user => user.id === post.userId);                   
            return(
                <div className="col-6">
                    <PostCard 
                    key = {post.id} 
                    title = {post.title}
                    body = {post.body}
                    username = {user.name}
                    email = {user.email} />
                </div>
            );        
        })
    );
}

export default PostList;