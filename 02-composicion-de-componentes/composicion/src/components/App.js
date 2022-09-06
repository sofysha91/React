import UserCard from '../components/UserCard';
import Fruits  from './Fuits';
import users from '../data/users'

// const userData = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//   }
  
//   const user2 = {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//   }
  

const App = () => {
    return(
        <div className='container'>
            <div className='row'>
                {users.map((user)=><UserCard user={user} />)}
            </div>
            <div className='row'>
                <Fruits />
            </div>
        </div>
    );
}

export default App;