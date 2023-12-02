
import './card.css'


export default function Card(props) {
  return (
    <div  className='card-style'>
    <h2>{props.title}</h2>
    <p>{props.description}</p>

    <a href='#' > learn more</a>
    </div>
  )
}
