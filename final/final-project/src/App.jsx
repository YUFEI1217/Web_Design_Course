import { useState, useEffect } from 'react';
import './App.css';
import { ReactDOM } from 'react';
import Header from './Header';
import Games from './Games';
import About from './About';
import Store from './Store';
import Home from './Home';
import Footer from './Footer';
import GameDetail from './GameDetail';
import ProductionDetail from './ProductionDetail';
import ProductionDetail_2 from './ProductionDetail_2';


function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState('');
  const [headerColorChange, setHeaderColorChange] = useState(true);

  useEffect (
    () => {
      function handlePageLoad() {
        // console.log('setting page state');
        setPage(document.location.pathname);

      }

      handlePageLoad();

      // console.log('add the listener');

      window.addEventListener('popstate', handlePageLoad);
      console.log('change state');
      setPage(document.location.pathname);
      
      return() => {
        window.removeEventListener('popstate', handlePageLoad);
      };
    },
    []
  );


  return (
    <>
      <Header setPage={setPage} setHeaderColorChange={setHeaderColorChange} headerColorChange={headerColorChange}/>
      <main className='main_content' style={{backgroundColor: headerColorChange ? "skyblue" : "darkblue"}}>
          {page === "/" && <Home/>}
          {page === "/Home" && <Home/>}
          {page === "/Games" && <Games setPage={setPage}/>}
          {page === "/Store" && <Store/>}
          {page === "/About" && <About setPage={setPage}/>}
          {page === "/GameDetail" && <GameDetail/> }
          {page === "/ProductionDetail" && <ProductionDetail/>}
          {page === "/ProductionDetail_2" && <ProductionDetail_2/>}
      </main>
      <Footer style={{backgroundColor: headerColorChange ? "deepskyblue" : "rgb(0, 0, 107)"}}/>
    </>
  )
}

export default App;
