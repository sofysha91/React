import React from "react";
import Card from "../Card/Card";

function EpisodesList({episodes}) {   
    
  return (
    <div className='container mt-5'>        
        <div className="row">      
            {episodes.map((_episode) => {   
                const { id, name, air_date , episode } = _episode;
                return (
                    <div className="col-6">
                        <Card
                            key={id}
                            name={name}                           
                            avatar= {null}
                            status={null}
                            species={null}    
                            primaryBlockTile="First Aired:"                        
                            primaryBlock={air_date} 
                            secondaryBlockTitle="Episode:" 
                            secondaryBlock={episode}                    
                        /> 
                    </div>
                );                                            
            })}      
        </div>
    </div>
  );
}

export default EpisodesList