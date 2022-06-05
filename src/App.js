import './App.css';
import Login from './component/Login';
import { React, useEffect } from 'react';

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('$')[0].split("=")[1].split("&")[0];
    }
  });

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
