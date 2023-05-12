import { useState } from 'react';
import uniqid from 'uniqid';
import CardDOM from './components/cardDOM';
import StatusDOM from './components/statusDOM';
import './style.css';
import asp from './images/Asp.jpg';
import centipede from './images/Centipede.jpg';
import condor from './images/Condor.jpg';
import dragon from './images/Dragon.jpg';
import griffon from './images/Griffon.jpg'
import leopard from './images/Leopard.jpg';
import phoenix from './images/Phoenix.jpg';
import rabbit from './images/Rabbit.jpg';
import rat from './images/Rat.jpg';
import salamander from './images/Salamander.jpg';


function App() {
  const cardArray = [
    {name: 'Asp', image: asp, id: uniqid(), picked: false},
    {name: 'Centipede', image: centipede, id: uniqid(), picked: false},
    {name: 'Condor', image: condor, id: uniqid(), picked: false},
    {name: 'Dragon', image: dragon, id: uniqid(), picked: false},
    {name: 'Griffon', image: griffon, id: uniqid(), picked: false},
    {name: 'Leopard', image: leopard, id: uniqid(), picked: false},
    {name: 'Phoenix', image: phoenix, id: uniqid(), picked: false},
    {name: 'Rabbit', image: rabbit, id: uniqid(), picked: false},
    {name: 'Rat', image: rat, id: uniqid(), picked: false},
    {name: 'Salamander', image: salamander, id: uniqid(), picked: false},
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
    <div className="content-container">
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
