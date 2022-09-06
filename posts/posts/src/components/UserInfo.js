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
                    <h5>{props.user[0].name}</h5>
                    <p>{props.user[0].email}</p>
                </div>
            </div>
            <div className="div-share d-flex justify-content-center align-items-center">
                <a className="share" href="#">
                    <img className='bg-primary p-2 rounded-circle' src={shareicon} />
                </a>
            </div>
        </div>
    );
}

export default UserInfo;