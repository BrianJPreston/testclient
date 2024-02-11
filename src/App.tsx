import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const getMessage = async () => {
    const myPromise = await fetch('http://localhost:8000/api/v1/data')
      .then((res) => {
        console.log('first res', res);
        return res.json();
      })
      .then((res) => {
        console.log('second res', res);
        setMessage(res.message);
        return res.message;
      })
      .catch((error) => {
        console.error(error);
      });
    console.log({ myPromise });
    console.log(JSON.stringify(myPromise));
  };

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => getMessage()}>server has been hit</button>
        <p> {message} </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
