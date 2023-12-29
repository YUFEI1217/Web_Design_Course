import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reorder from './Reorder'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Inventory</h1>
      <div className='result'>
        <p>
          The count is {count}
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)} disabled={!count}>
          - 
        </button>
        {count === 0 && (<Reorder onReorder={() => setCount((count) => count + 5)} />)}
      </div>
      <div className='edit'>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
