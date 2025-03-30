import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {BookingProvider} from './BookingContext'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage';
function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} index/>
          <Route path='/booking/:movieId/:sessionId' element={<BookingPage />} />
        </Routes>
      </Router>
    </BookingProvider>
  )
}

export default App
