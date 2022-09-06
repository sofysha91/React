import React from 'react';
import { Title, Body, Button } from './Components';

const Card = (props) => {
    return (
        <div className={'card-car ' + props.text + ' col-12 col-lg-4 p-5'} >                    
            <Title text={props.text} />
            <Body />
            <Button />
        </div>
    )
}

export default Card