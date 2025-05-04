export interface Session {
  id: string;
  time: string; 
  hall: string;
  availableSeats: number; 
}

export interface Movie {
  id: number;
  img: string;
  title: string;
  descr: string;
  genre: string;
  sessions: Session[]; 
}

export interface Bookings {
  [key: string]: Booking[]; 
}

export interface Booking {
  seats: number[];
  user: UserData;
}

export interface BookingContextType {
  movieList: Movie[];
  bookings: Bookings;
  bookSeats: (movieId: number, sessionId: string, selectedSeats: number[], UserData: UserData) => void;
  getBookedSeats: (movieId: number, sessionId: string) => number[];
  getUserBookings: (email: string) => { sessionId: string, movieTitle: string, data: any }[];
}

export interface UserData {
  name: string;
  phone: string;
  email: string
}

export interface AuthContextType {
  user: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
}