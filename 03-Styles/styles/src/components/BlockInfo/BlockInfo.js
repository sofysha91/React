import React from 'react';
import styles from './BlockInfo.module.scss';

const BlockInfo = (props) => {  
  return (    
    <div className={styles.BlockInfo}>    
        <span className="text-gray">{props.label}</span>  
        <p className="text-content">{props.content}</p>      
    </div>    
  )
}

export default BlockInfo