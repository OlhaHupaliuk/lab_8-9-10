import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {BookingProvider} from './BookingContext'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage';
import Layout from './components/Layout';
import { SignInPage } from './pages/SignInPage';
function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/home' element={<Home />}/>
            <Route path='/booking/:movieId/:sessionId' element={<BookingPage />} />
          </Route>
          <Route path='/login' element={<SignInPage />} />
        </Routes>
      </Router>
    </BookingProvider>
  )
}

export default App
