import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React with Python</h1>
        <p>{data.message}</p>
      </header>
    </div>
  );
}

export default App;
