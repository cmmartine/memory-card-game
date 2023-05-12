export default function CardDOM(props) {

  const name = props.card.name;
  const image = props.card.image;
  const id = props.card.id;
  const cardIndex = props.index;
  const pickedStatus = props.card.picked;

  return (
    <div className="card-inner" onClick={(e) => {props.selectCard(name, image, id, cardIndex, pickedStatus)}}>
      <img src={image} alt={name} className='image' />
      <p>{name}</p>
    </div>
  )
}