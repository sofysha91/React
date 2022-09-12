import React from 'react';
import styles from "./ListData.module.scss"

const ListData = ({title, value, setSection, icon, index, active}) => {    
    return(
        <li className={active === index ? styles.active : ''} onMouseOver={() => {setSection(title,value,index)}}><i className={"bi-"+icon}></i></li>
    );
}

export default ListData;