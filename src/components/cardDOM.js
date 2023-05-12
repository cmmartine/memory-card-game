export default function CardDOM(props) {

  return (
    <div className="card-inner">
      <p>{props.card.name}</p>
    </div>
  )
}