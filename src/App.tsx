import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {BookingProvider} from './BookingContext'
import MovieList from './components/MovieList'
import BookingPage from './components/BookingPage';
function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/booking/:movieId/:sessionId' element={<BookingPage />} />
        </Routes>
      </Router>
    </BookingProvider>
  )
}

export default App
