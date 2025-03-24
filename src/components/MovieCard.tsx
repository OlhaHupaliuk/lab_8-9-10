import { useState } from 'react';
import '../styles/MovieCard.sass'
import { Movie } from '../types';
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => { 
  const { img, title, descr, genre, sessions } = movie;
  const [mouseOver, setMouseOver] = useState(false);
  function handleHover(){
    setMouseOver(!mouseOver)
  }
  return (
    <li onMouseEnter={handleHover} onMouseLeave={handleHover} className='movieCard'>
        <img 
        className='movieCard__image' 
        style={
         {opacity: mouseOver ? '30%' : '100%' , zIndex: mouseOver ?  -1 : '' , filter: mouseOver ? 'blur(3px)' : ''}
        }   
        src={img} />
        <p className='movieCard__descr'>{descr}</p>
        <p className='movieCard__genre'>{genre}</p>             
        <p>Available sessions:</p>
        <div className='movieCard__timeWrap'> 

            {sessions.map(time => {
              return(
                <button>{time}</button>
              )
            })}
        </div>
        
        <h2 className='movieCard__title'>{title}</h2>
    </li>
  )
}

export default MovieCard