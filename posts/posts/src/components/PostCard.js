import Title from './Title';
import Body from './Body';
import users from '../data/users';
import UserInfo from './UserInfo';

const PostCard = (props) => {
    return (
      <div className="col-6 card p-4">
        <Title text={props.post.title} />
        <Body text={props.post.body} />
        <UserInfo user={users.filter(user => user.id === props.post.userId)} />
      </div>
    );
  };
  
  export default PostCard;