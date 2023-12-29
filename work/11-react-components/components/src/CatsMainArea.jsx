import { useState } from 'react';
import MainCard from './MainCard';
import Cats from './Cats';
import Home from './Home';
import { LinkHTMLAttributes } from 'react';

function MainArea() {

    const [page, setPage] = useState('Cats');

    return (
        <main className="main">
            <div>
                <h2 className='main_h2'>Cats introducation</h2>
                <MainCard className="mainarea_card" setPage={setPage}/>
                {/* { (page === 'Home') && <Home/> } 
                { (page === 'Cats') && <Cats/> } */}
            </div>
        </main>
    );
}

export default MainArea;