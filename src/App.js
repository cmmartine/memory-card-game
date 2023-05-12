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

  function selectCard(name, image, id, cardIndex, pickedStatus) {
    if (pickedStatus === false) {
      const card = {
        name: name,
        image: image,
        id: id,
        picked: true,
      };
      let copy = [...cards];
      copy.splice(cardIndex, 1, card);
      setCards(shuffle(copy));
      checkCurrentScoreAndStatus();
      checkBestScore();
    } else {
      resetGame();
    }
  }

  function resetGame() {
    let copy = [...cards];
    const resetCopy = copy.map((card) => {
      return card = {
        name: card.name,
        image: card.image,
        id: card.id,
        picked: false,
      };
    });
    setCards(shuffle(resetCopy));
    setCurrentScore(0);
  }

  function checkBestScore() {
    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
    }
  }

  function checkCurrentScoreAndStatus() {
    if (currentScore + 1 < cardArray.length) {
      setCurrentScore(currentScore + 1);
    } else if (currentScore + 1 === cardArray.length) {
      setBestScore(currentScore + 1);
      alert("Congratulations, you got all the cards!");
      resetGame();
    }
  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <div className="status-container">
        <StatusDOM currentScore={currentScore} bestScore={bestScore} cardArray={cardArray} />
      </div>

      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="card-outer">
            <CardDOM card={card} index={cards.indexOf(card)} selectCard={selectCard}/>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default App;
