import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {BookingProvider} from './hooks/BookingContext'
import { AuthProvider } from './hooks/AuthContext';
import Home from './pages/Home'
import BookingPage from './pages/BookingPage';
import Layout from './components/Layout';
import { SignInPage } from './pages/SignInPage';
import { UserTicketsPage } from './pages/UserTicketsPage';
function App() {
  return (
    <AuthProvider>
    <BookingProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/home' element={<Home />}/>
            <Route path='/booking/:movieId/:sessionId' element={<BookingPage />} />
            <Route path='/usertickets' element={<UserTicketsPage />} />
          </Route>
          <Route path='/login' element={<SignInPage />} />
        </Routes>
      </Router>
    </BookingProvider>
    </AuthProvider>
    
  )
}

export default App
