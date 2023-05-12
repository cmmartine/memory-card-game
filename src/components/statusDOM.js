export default function StatusDOM(props) {
  
  return (
    <>
      <div className="status-bar-items">
        <h1>Memory Game</h1>
        <p>Click a card to get points, but don't click the same card more than once!</p>
      </div>

      <div className="status-bar-items">
        <p>Highest Score: {props.bestScore}</p>
        <p>Current Points: {props.currentScore}</p>
      </div>
    </>
  )
}