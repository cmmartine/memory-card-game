import { useState } from 'react';
import uniqid from 'uniqid';
import CardDOM from './components/cardDOM';
import StatusDOM from './components/statusDOM';
import './style.css';

function App() {
  const cardArray = [
    {name: 'Asp', image: '', id: uniqid(), picked: false},
    {name: 'Centipede', image: '', id: uniqid(), picked: false},
    {name: 'Condor', image: '', id: uniqid(), picked: false},
    {name: 'Dragon', image: '', id: uniqid(), picked: false},
    {name: 'Griffin', image: '', id: uniqid(), picked: false},
    {name: 'Leopard', image: '', id: uniqid(), picked: false},
    {name: 'Phoenix', image: '', id: uniqid(), picked: false},
    {name: 'Rabbit', image: '', id: uniqid(), picked: false},
    {name: 'Rat', image: '', id: uniqid(), picked: false},
    {name: 'Salamander', image: '', id: uniqid(), picked: false},
  ]

  const [cards, setCards] = useState(cardArray);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <div className="status-container">
        <StatusDOM currentScore={currentScore} bestScore={bestScore} />
      </div>

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card-outer">
            <CardDOM card={card} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
