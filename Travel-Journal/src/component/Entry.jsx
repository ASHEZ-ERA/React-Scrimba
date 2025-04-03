import image from './japan.jpg'
import marker from './marker.png'

export default function Entry({entry}){
  console.log(entry)
    return (
      <article className="journal" >
        <img src={image} alt="mount fuji" className="main-image" />
        <div className='main-content'>
          <img src={marker} alt="marker" className='main-content-image'/>
          <span className='japan'>{entry.country}</span>
          <a href={entry.googleMapsLink} className='map'>
            View on Google Maps
          </a>
          <h2>{entry.title}</h2>
          <p>{entry.date}</p>
          <p>
            {entry.text}
          </p>
        </div>
      </article>
    );
}