import React, { useEffect, useState} from 'react';
import CharactersList from '../components/Characters/CharactersList';

const CharactersPage = () => {
    //Fetch characters - https://rickandmortyapi.com/api/character
    const [characters, setCharacters] = useState([]);    
    const query = `        
            characters(page: 1) {
              info {
                count
              }
              results {
               
                name, image, id, status, species
                 episode{
                  name
                }
                location{
                  name
                }     
              }
            }  
    `; 
    //GraphQL fetch
    useEffect(() => {
        fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({query: `{${query}}`})
        })
        .then((response) => response.json())
        .then(characters => {
            setCharacters(characters.data.characters.results);            
        });
    }, []);
    return (
        <div>
            <h1>Characters</h1>
            {characters && <CharactersList characters={characters}/> }
        </div>
    )
}

export default CharactersPage