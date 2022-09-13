import { Routes, Route, Link } from 'react-router-dom';
import LocationsPage from './pages/LocationsPage';
import CharactersPage from './pages/CharactersPage';
import HomePage from './pages/HomePage';
import EpisodesPage from './pages/EpisodesPage';

function App() {
  return(
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/locations'>Locations</Link>
        <Link to='/episodes'>Episodes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="characters" element={<CharactersPage />}></Route>
        <Route path="locations" element={<LocationsPage />}></Route>
        <Route path="episodes" element={<EpisodesPage />}></Route>
      </Routes>
    </div>
  );
 
}

export default App;
