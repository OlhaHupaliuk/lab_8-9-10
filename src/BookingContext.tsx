
import { createContext, useContext, useState, ReactNode } from "react";
import { movies } from './data/movies';
import { BookingContextType, Movie, Bookings } from './types'; 

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [movieList, setMovieList] = useState<Movie[]>(movies);
  const [bookings, setBookings] = useState<Bookings>({});

  function bookSeats(movieId: number, sessionId: string, selectedSeats: number[]) {
    const key = `${movieId}-${sessionId}`;
    setBookings((prevVal) => ({
      ...prevVal,
      [key]: selectedSeats,
    }));

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

  const value: BookingContextType = {
    movieList,
    bookings,
    bookSeats,
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