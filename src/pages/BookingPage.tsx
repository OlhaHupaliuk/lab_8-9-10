import { useParams, useNavigate } from "react-router-dom"
import { useBooking } from "../hooks/BookingContext";
import { useState } from "react";
import { UserData } from "../types"
import '../styles/BookingPage.sass'
import CinemaHall from "../components/CinemaHall";
import UserForm from '../components/UserForm'
import { ToastContainer, toast } from 'react-toastify';

const BookingPage = () => {
  const { movieId, sessionId } = useParams();
  const { movieList, bookSeats, getBookedSeats } = useBooking();
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const notify = () => toast.success(`Заброньовано місця: ${selectedSeats.join(', ')}`, 
  {theme: "dark", autoClose: 3000, className: 'notify'});

  const navigate = useNavigate();
  const movie = movieList.find((m) => m.id === Number(movieId));
  const session = movie?.sessions.find((s) => s.id === sessionId);
  const bookedSeats = movieId && sessionId ? getBookedSeats(Number(movieId), sessionId) : [];


  const toggleSeat = (seat: number): void => {
      if (selectedSeats.includes(seat)) {
          setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      } else if (!bookedSeats.includes(seat)) {
          setSelectedSeats([...selectedSeats, seat]);
      }
  };

  const handleUserDataSubmit = (data: UserData) => {
      setShowModal(false)
      handleBooking(data);
  };

  const handleBooking = (data: UserData) => {
    if (selectedSeats.length > 0 && movie && session ){
            bookSeats(movie.id, session.id, selectedSeats, data);
            setShowModal(false)
            notify();
            setSelectedSeats([]);
    }
  };

  return (
      session && (
          <div className="bookingPage">
              <h1 className="bookingPage__title">{movie?.title} - {session.time}</h1>
              <CinemaHall 
                  selectedSeats={selectedSeats} 
                  bookedSeats={bookedSeats} 
                  toggleSeat={toggleSeat}
              />
              <button 
                  onClick={() => setSelectedSeats([])} 
                  className="refreshBtn" 
                  disabled={selectedSeats.length === 0}
              >
                  X
              </button>
              <span className="br"></span>
              <div className="infoContainer">
                  <div className="infoContainer__seatInfoWrap">
                      <h2>Seat</h2>
                      <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : '-'}</p>
                  </div>
                  <div className="infoContainer__btnWrap">
                      <button className="returnBtn" onClick={() => navigate('/')}>
                          Back
                      </button>
                      <button className="bookBtn" onClick={() => setShowModal(true)} disabled={selectedSeats.length === 0}>
                          Proceed Booking
                      </button>
                  </div>
              </div>
              {showModal && <UserForm onSubmit={handleUserDataSubmit} onClose={setShowModal} />}
              <ToastContainer position="top-center"/>
          </div>
      )
  );
};

export default BookingPage;