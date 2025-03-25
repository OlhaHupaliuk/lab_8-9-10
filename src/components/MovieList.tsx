import React, { useState } from 'react'
import {useBooking} from '../BookingContext'
import MovieCard from './MovieCard'
import '../styles/MovieList.sass'

const MovieList: React.FC = () => {
  const [movieName, setMovieName] = useState<string>('');
  const { movieList } = useBooking();

  function handleChange(ev:React.ChangeEvent<HTMLInputElement>){
      setMovieName(ev.target.value) 
  }

  const filteredMovies = movieList.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );

  return (
    <div className='mainPage'>
      <input className='input' onChange={handleChange} placeholder='Enter movie name to find' value={movieName}></input>
      <h1>Now Showing</h1> 
      <ul className='movieList'>
      {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      
    </ul>
    </div>


  )
}

export default MovieList