import React from 'react';
import './App.css';
import Card from './Components/Card'; // Import Card component

function App() {
  return (
    <div className="app">
      <h1>Capra-Nack Poster Cards</h1>

      <div className="card-container">
        <Card
          title="Nack Glitch"
          subtitle="Full Stack Dev"
          description="Tech lover building cool apps!"
          image="https://via.placeholder.com/300x200?text=Nack"
        />
        <Card
          title="Fromsa"
          subtitle="Creative Designer"
          description="Designs with imagination."
          image="https://via.placeholder.com/300x200?text=Fromsa"
        />
        <Card
          title="Berakel"
          subtitle="Visionary Developer"
          description="Coding tools for tomorrow."
          image="https://via.placeholder.com/300x200?text=Berakel"
        />
      </div>
    </div>
  );
}

export default App;
