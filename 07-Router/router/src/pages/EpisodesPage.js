import React, { useEffect, useState} from 'react';
import EpisodesList from '../components/Episodes/EpisodesList';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);    
    //https://rickandmortyapi.com/api/episode
    //GraphQL fetch
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
        .then((response) => response.json())
        .then(episodes => {
          setEpisodes(episodes.results);            
        });
    }, []);
    return (
        <div>
            <h1>Episodes</h1>
            {episodes && <EpisodesList episodes={episodes}/> }
        </div>
    );
}

export default EpisodesPage