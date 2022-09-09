import React, { useState } from "react";
import characters from "../data/characters";
import Card from "../components/Card/Card"

const CardList = () => {
    const [filter, setFilter] = useState("all");    
    
    const setAll = () => setFilter("all");
    const setAlive = () => setFilter("Alive");
    const setDead = () => setFilter("Dead");
    const setUnknown = () => setFilter("unknown");
    
    const charactersFiltered = characters.filter(character => {
        if(filter != "all"){
            return character.status === filter;
         }
        return true;
    });    

  return (
    <div className='container mt-5'>
        <div className="mb-5">
            <button className="btn btn-primary me-3" onClick={setAll} >Show All</button>  
            <button className="btn btn-primary me-3" onClick={setAlive}>Alive</button>
            <button className="btn btn-primary me-3" onClick={setDead} >Dead</button>  
            <button className="btn btn-primary me-3" onClick={setUnknown}>Unknown</button>
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