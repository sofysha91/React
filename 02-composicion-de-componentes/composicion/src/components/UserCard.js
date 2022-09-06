import Title from './Title';
import Label from './Label';

const UserCard = (props) => {
    return (
      <div className="card col-6">
        <Title text={props.user.name} />
        <Label text={props.user.email} />
        <Label text={props.user.phone} />
        <Label text={props.user.website} />
      </div>
    );
  };
  
  export default UserCard;