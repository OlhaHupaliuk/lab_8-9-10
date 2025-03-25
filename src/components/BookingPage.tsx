import { useParams } from "react-router-dom"
import { useBooking } from "../BookingContext";
import { useState } from "react";
const BookingPage = () => {
    const { movieId, sessionId } = useParams();
    const { movieList, bookSeats, bookings } = useBooking();
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

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
        <div className="seatsContainer">
            <h1>{movie?.title} - {session.time}</h1>
            <p>Available seats: {session.availableSeats}</p>
            <div>
            {Array.from({ length: session.availableSeats }, (_, i) => i + 1).map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            style={{
              backgroundColor: bookedSeats.includes(seat)
                ? 'red'
                : selectedSeats.includes(seat)
                ? 'green'
                : 'grey',
            }}
            disabled={bookedSeats.includes(seat)}
          >
            {seat}
          </button>
        ))}   
            </div>
            <button onClick={handleBooking} disabled={selectedSeats.length === 0}>
                 Забронювати
            </button>
        </div>
    )
}

export default BookingPage