import React, { useEffect, useState} from 'react';
import LocationsList from '../components/Locations/LocationsList';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);    
  //https://rickandmortyapi.com/api/location
  //GraphQL fetch
  useEffect(() => {
      fetch('https://rickandmortyapi.com/api/location')
      .then((response) => response.json())
      .then(locations => {
        setLocations(locations.results);            
      });
  }, []);
  return (
      <div>
          <h1>Locations</h1>
          {locations && <LocationsList locations={locations}/> }
      </div>
  );
}

export default LocationsPage