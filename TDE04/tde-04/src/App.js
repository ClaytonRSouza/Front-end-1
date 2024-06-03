import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="cardsContainer">
      <Card
        título="Diamond"
        texto="Diamente minecraftniano"
        imagem="https://art.pixilart.com/52a8b43c7d7af7b.png"
      />
    </div>
  );
}

export default App;
