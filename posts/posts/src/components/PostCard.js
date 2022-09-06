import Title from './Title';
import Body from './Body';
import UserInfo from './UserInfo';

const PostCard = (props) => {   
    return (        
      <div className="card mb-3">
        <div className="card-body">
          <Title text={props.title} />
          <Body text={props.body} />
          <UserInfo name={props.username} email={props.email}/>
        </div>
      </div> 
    );
  };
  
  export default PostCard;