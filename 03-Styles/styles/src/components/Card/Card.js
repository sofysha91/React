import React, { useEffect, useState} from 'react';
import styles from './Card.module.scss';
import BlockInfo from '../BlockInfo/BlockInfo';

const Card = (props) => {  
    const [episode, setData] = useState("");
    useEffect(() => {
        fetch(props.episodeID)
        .then((response) => response.json())
        .then(episode => {
            setData(episode.name);
        });
    }, "");
 return (    
    <div className={styles.characterCard + " mb-5"}>    
        <div className={styles.characterAvatar}>
            <img src={props.avatar} />
        </div>
        <div className='character-info p-3'>
            <h2>{props.name}</h2>
            <span className="status"><span className={"status-icon " + props.status}></span> {props.status} - {props.species}</span>
            <BlockInfo label="Last known location:" content={props.location} />
            <BlockInfo label="First seen in:" content={episode} />
        </div>
    </div>    
  )
}

export default Card