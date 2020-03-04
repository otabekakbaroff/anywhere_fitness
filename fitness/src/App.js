import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    console.log('HEELLOo')
    axios.get("http://localhost:5000/api/instructors/").then(response=>{
      console.log('HELLO');
      console.log(response);
    })
  },[]);
  return (
    <div className="App">
      <h1>REACT APP :')</h1>
    </div>
  );
}

export default App;
