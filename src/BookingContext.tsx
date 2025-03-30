
import { createContext, useContext, useState, ReactNode } from "react";
import { movies } from './data/movies';
import { BookingContextType, Movie, Bookings, UserData, Booking} from './types'; 

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<Movie[]>(movies);
  const [bookings, setBookings] = useState<Bookings>(() => {
    const initialBookings: Bookings = {};
    movies.forEach((movie) => {
      movie.sessions.forEach((session) => {
        const key = `${movie.id}-${session.id}`;
        const storedData = localStorage.getItem(key);
        if (storedData) {
          initialBookings[key] = JSON.parse(storedData);
        }
      });
    });
    return initialBookings;
  });

  function bookSeats(movieId: number, sessionId: string, selectedSeats: number[], userData: UserData) {
    const key = `${movieId}-${sessionId}`;

    setBookings((prevVal) => {
      const existingBookings = prevVal[key] || []; 
      const newBooking: Booking = { seats: selectedSeats, user: userData };
      const updatedBookings = [...existingBookings, newBooking]; 

      // Зберігаємо в LocalStorage
      localStorage.setItem(key, JSON.stringify(updatedBookings));

      return {
        ...prevVal,
        [key]: updatedBookings, 
      };
    });

    // Оновлюємо кількість вільних місць у movieList
    setMovieList((prev) =>
      prev.map((movie) =>
        movie.id === movieId
          ? {
              ...movie,
              sessions: movie.sessions.map((session) =>
                session.id === sessionId
                  ? {
                      ...session,
                      availableSeats: session.availableSeats - selectedSeats.length,
                    }
                  : session
              ),
            }
          : movie
      )
    );
  }
  function getBookedSeats(movieId: number, sessionId: string): number[] {
    const key = `${movieId}-${sessionId}`;
    const bookings: Booking[] = JSON.parse(localStorage.getItem(key) || '[]');
    const allSeats: number[] = bookings.flatMap((booking) => booking.seats);
    return allSeats;
  }


  const value: BookingContextType = {
    movieList,
    bookings,
    bookSeats,
    getBookedSeats
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};