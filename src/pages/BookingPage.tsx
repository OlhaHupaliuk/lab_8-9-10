import { useParams, useNavigate } from "react-router-dom"
import { useBooking } from "../BookingContext";
import { useState } from "react";
import '../styles/BookingPage.sass'
import CinemaHall from "../components/CinemaHall";
const BookingPage = () => {
    const { movieId, sessionId } = useParams();
    const { movieList, bookSeats, bookings } = useBooking();
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
    const navigate = useNavigate();

    const movie = movieList.find((m) => m.id === Number(movieId));
    const session = movie?.sessions.find((s) => s.id === sessionId);
    const bookingKey = `${movieId}-${sessionId}`;
    const bookedSeats = bookings[bookingKey] || [];

    const toggleSeat = (seat:number):void => {
        if (selectedSeats.includes(seat)) {
          setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else if (!bookedSeats.includes(seat)) {
          setSelectedSeats([...selectedSeats, seat]);
        }
      };

    const handleBooking = () => {
        if(selectedSeats.length > 0 && movie && session){
            bookSeats(movie.id, session.id, selectedSeats);
            alert(`Заброньовано місця: ${selectedSeats.join(', ')}`)
            setSelectedSeats([]);
        }
    }
 
    return (
        session && 
        <div className="bookingPage">
            <h1 className="bookingPage__title">{movie?.title} - {session.time}</h1>
            <CinemaHall selectedSeats={selectedSeats} bookedSeats={bookedSeats} toggleSeat={toggleSeat}/>
            <button onClick={() => setSelectedSeats([])} className="refreshBtn" disabled={selectedSeats.length === 0}>
                 X
            </button>
            <span className="br"></span>
            <div className="infoContainer">
              <div className="infoContainer__seatInfoWrap">
                <h2>Seat</h2>
                <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : '-'}</p>
              </div>
            <div className="infoContainer__btnWrap">
              <button className="returnBtn" onClick={()=> navigate('/')}>Back</button>
              <button className="bookBtn" onClick={handleBooking} >Proceed Booking</button>
            </div>
          </div>
        </div>
    )
}

export default BookingPage