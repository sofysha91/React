import React from "react";
import Card from "../Card/Card";

function CharactersList({characters}) {   
    
  return (
    <div className='container mt-5'>        
        <div className="row">      
            {characters.map((character) => {   
                const { id, name, image ,status ,species } = character;
                return (
                    <div className="col-6">
                        <Card
                            key={id}
                            name={name}                           
                            avatar={image} 
                            status={status}
                            species={species}     
                            primaryBlockTile="Last known location:"                        
                            primaryBlock={character.episode[0].name} 
                            secondaryBlockTitle="First seen in:" 
                            secondaryBlock={character.location.name}                    
                        /> 
                    </div>
                );                                            
            })}      
        </div>
    </div>
  );
}

export default CharactersList