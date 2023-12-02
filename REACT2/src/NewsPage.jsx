
import './newspage.css'

export default function NewsPage(props) {
  return (

    
      <div className="news-container" id='news'>
        <div className="news-content">{props.children}</div>
        <img src={props.src} alt={props.title} style={props.style} />
      </div>
    );
  
}
