import shareicon from '../assets/icon-share.svg';
import avatar from '../assets/avatar-michelle.jpg';

const UserInfo = (props) => {
    return (
        <div className="div-user d-flex justify-content-between align-items-start">
            <div className="d-flex justify-content-start">
                <div className="avatar rounded-circle me-2">
                    <img src={avatar} />
                </div>
                <div className="user-info">
                    <h5>{props.name}</h5>
                    <p>{props.email}</p>
                </div>
            </div>            
            <a className="share" href="#">
                <img className='p-2' src={shareicon} />
            </a>            
        </div>
    );
}

export default UserInfo;