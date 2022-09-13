import React from "react";
import Card from "../Card/Card";

function LocationsList({locations}) {   
    
  return (
    <div className='container mt-5'>        
        <div className="row">      
            {locations.map((location) => {   
                const { id, name, type , dimension } = location;
                return (
                    <div className="col-6">
                        <Card
                            key={id}
                            name={name}                           
                            avatar={null} 
                            status={null}
                            species={null}     
                            primaryBlockTile="Type of location:"                        
                            primaryBlock={type} 
                            secondaryBlockTitle="Dimension:" 
                            secondaryBlock={dimension}                    
                        /> 
                    </div>
                );                                            
            })}      
        </div>
    </div>
  );
}

export default LocationsList