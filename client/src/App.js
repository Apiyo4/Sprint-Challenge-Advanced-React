import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get("http://localhost:5000/api/players")
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
  })
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
