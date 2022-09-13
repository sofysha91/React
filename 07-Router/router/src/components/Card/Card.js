import React from 'react';
import styles from './Card.module.scss';
import BlockInfo from '../BlockInfo/BlockInfo';
import Avatar from '../Avatar/Avatar';

const Card = ({key, name, avatar, status, species, primaryBlockTile, primaryBlock, secondaryBlockTitle, secondaryBlock}) => {  
  
 return (    
    <div className={styles.characterCard + " mb-5"}>    
        {avatar && <Avatar avatar={avatar} name={name} />}       
        <div className='character-info p-3'>
            <h2>{name}</h2>
            {status && <span className="status"><span className={"status-icon " + status}></span> {status} - {species}</span>}
            <BlockInfo label={primaryBlockTile} content={primaryBlock} />
            <BlockInfo label={secondaryBlockTitle} content={secondaryBlock} />
        </div>
    </div>    
  )
}

export default Card