import { useState} from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/MovieCard.sass'
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => { 
  const { id, img, title, descr, genre, sessions } = movie;
  const [mouseOver, setMouseOver] = useState(false);
  const navigate = useNavigate();
  function handleHover(){
    setMouseOver(!mouseOver)
  }
  return (
    <li onMouseEnter={handleHover} onMouseLeave={handleHover} className='movieCard'> 
    {/** для ноутбуку треба просто навести щоб побачити додаткову інформацію про фільм, а для сенсорних пристроїв 
     * треба натиснути на картку */}
        <img 
          className='movieCard__image' 
          style={
            {opacity: mouseOver ? '30%' : '100%' , zIndex: mouseOver ?  -1 : '' , filter: mouseOver ? 'blur(3px)' : ''}
          }   
          src={img} 
          alt=''/>
        <p className='movieCard__descr'>{descr}</p>
        <p className='movieCard__genre'>{genre}</p>             
        <p>Available sessions:</p>
        <div className='movieCard__timeWrap'> 
            {sessions.map(time => {
              return(
                <button className='movieCard__sessionBtn' onClick={() => navigate(`/booking/${id}/${time.id}`)}>{time.time}</button>
              )
            })}
        </div>
        <h2 className='movieCard__title'>{title}</h2>
    </li>
  )
}

export default MovieCard