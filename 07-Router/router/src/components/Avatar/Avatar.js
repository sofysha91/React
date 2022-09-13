import React from 'react';
import styles from './Avatar.module.scss';

const Avatar = ({avatar, name}) => {
  return (
    <div className={styles.characterAvatar}>
        <img src={avatar} alt={name} />
    </div>
  )
}

export default Avatar