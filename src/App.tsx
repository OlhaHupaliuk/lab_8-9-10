import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList'
import {movies} from './data/movies'
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<MovieList movies={movies}/>} />
        </Routes>
    </Router>
  )
}

export default App
