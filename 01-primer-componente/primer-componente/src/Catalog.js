import React from 'react';
import Card  from './Card';

const Catalog = () => {
    return (
        <div className="row card-car-container">
            <Card text={"sedan"}/>    
            <Card text={"suv"}/> 
            <Card text={"luxury"}/>     
        </div>
    )
}

export default Catalog