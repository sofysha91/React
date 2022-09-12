import React, { useEffect, useState} from 'react';
import ListData from '../ListData/ListData';
import styles from "./UserCard.module.scss";

const UserCard = () => {
    const [user, setUser] = useState();
    const [sectionTitle, setSectionTitle] = useState("Hi, My name is");
    const [sectionData, setSectionData] = useState("");
    const [active, setActive] = useState(0);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then(user => {            
            setUser(user.results[0]); 
            setSectionData(user.results[0].name.first + " " + user.results[0].name.last);          
        })
        .catch((error) => {
            console.log("error", error);
        });
    }, []);

    function setSection(title, value, index){        
        setSectionTitle(title);
        setSectionData(value);
        setActive(index)
    }
    
    if(user){
        return(
            <div className={styles.userCard}>    
                <div className={styles.userAvatar}>
                    <img src={user.picture.large} alt={user.name.first + " " + user.name.last} />
                </div>
                <div className='user-info'>            
                    <p className={styles.userTitle}>{sectionTitle}</p>
                    <p>{sectionData}</p>
                </div>
                <ul>
                    <ListData index={0} active={active} title="Hi, My name is" value={user.name.first + " " + user.name.last} setSection={setSection} icon="person" />
                    <ListData index={1} active={active} title="My email address is" value={user.email} setSection={setSection} icon="envelope"  />
                    <ListData index={2} active={active} title="My birthday is" value={new Date(user.dob.date).toLocaleDateString()} setSection={setSection} icon="calendar"  />
                    <ListData index={3} active={active} title="My address is" value={user.location.street.number + " " + user.location.street.name} setSection={setSection} icon="geo" />
                    <ListData index={4} active={active} title="My phone number is" value={user.cell} setSection={setSection} icon="telephone"  />
                    <ListData index={5} active={active} title="My password is" value={user.login.password} setSection={setSection} icon="lock" />
                </ul>
            </div>
        );
    }
    return <div>Loading...</div>
}

export default UserCard;

