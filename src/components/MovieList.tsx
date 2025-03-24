import React, { useState } from 'react'
import MovieCard from './MovieCard'
import '../styles/MovieList.sass'
import { Movie } from '../types'

interface MovieListProps {
  movies: Movie[];
}
const MovieList: React.FC<MovieListProps> = ({movies}) => {
  const [movieName, setMovieName] = useState<string>('');

  function handleChange(ev:React.ChangeEvent<HTMLInputElement>){
      setMovieName(ev.target.value) 
  }

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );

  return (
    <>
      <input className='input' onChange={handleChange} placeholder='Enter movie name to find' value={movieName}></input>
      <h1>Now Showing</h1> 
      <ul className='movieList'>
      {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      
    </ul>
    </>


  )
}

export default MovieList