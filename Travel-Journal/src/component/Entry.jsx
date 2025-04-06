import image from '../assets/images/japan.jpg'
import marker from '../assets/images/marker.png'

export default function Entry({date, text, googleMapsLink, country, title}){
  console.log()
    return (
      <article className="journal" >
        <img src={image} alt="mount fuji" className="main-image" />
        <div className='main-content'>
          <img src={marker} alt="marker" className='main-content-image'/>
          <span className='japan'>{country}</span>
          <a href={googleMapsLink} className='map'>
            View on Google Maps
          </a>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>
            {text}
          </p>
        </div>
      </article>
    );
}