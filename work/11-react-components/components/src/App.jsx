import './App.css'
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Cats from './Cats';
import NavBar from './NavBar';


function App() {
  const [page, setPage] = useState('Home');

  return (
    <>
      <NavBar setPage={setPage} />
      { (page === 'Home') && <Home/> }
      { (page === 'Cats') && <Cats/> }
      { (page === 'About') && <About/> }
    </>
  );
}

export default App;
