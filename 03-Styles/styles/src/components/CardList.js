import React, { useState } from "react";
import characters from "../data/characters";
import Card from "../components/Card/Card"

const CardList = () => {
    const [filter, setFilter] = useState("all");    
    
    const all = () => setFilter("all");
    const Alive = () => setFilter("Alive");
    const Dead = () => setFilter("Dead");
    const Unknown = () => setFilter("unknown");

    
    const charactersFiltered = characters.filter(character => {
        if(filter != "all"){
            return character.status === filter;
         }
        return character;
    });    

  return (
    <div className='container mt-5'>
        <div className="mb-5">
            <button className="btn btn-primary me-3" onClick={all} >Show All</button>  
            <button className="btn btn-primary me-3" onClick={Alive}>Alive</button>
            <button className="btn btn-primary me-3" onClick={Dead} >Dead</button>  
            <button className="btn btn-primary me-3" onClick={Unknown}>Unknown</button>
        </div>
        <div className="row">      
            {charactersFiltered.map((character) => {                               
                let episodeID = "";
                if(character.episode.length > 0){
                    episodeID = character.episode[0];
                }
                return (
                    <div className="col-6">
                        <Card
                            key={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            avatar={character.image}  
                            episodeID={episodeID}  
                            location={character.location.name}                    
                        /> 
                    </div>
                );    
                           
            })}      
        </div>
    </div>
  );
};

export default CardList;