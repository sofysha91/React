import posts from '../data/posts';
import PostCard from './PostCard';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        {posts.map((post)=><PostCard key={post} post={post} />)}
      </div>
    </div>
  );
}

export default App;
