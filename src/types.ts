
// Тип для сеансу
export interface Session {
  id: string; // Унікальний ідентифікатор сеансу (наприклад, "s1")
  time: string; // Час сеансу (наприклад, "2025-04-10 19:00")
  hall: string; // Назва залу (наприклад, "Hall 1")
  availableSeats: number; // Кількість вільних місць
}

// Тип для фільму
export interface Movie {
  id: number;
  img: string;
  title: string;
  descr: string;
  genre: string;
  sessions: Session[]; // Масив об’єктів сеансів, а не рядків
}

// Тип для бронювань
export interface Bookings {
  [key: string]: number[]; // Ключ — "movieId-sessionId", значення — масив номерів місць
}

// Тип для значення контексту
export interface BookingContextType {
  movieList: Movie[];
  bookings: Bookings;
  bookSeats: (movieId: number, sessionId: string, selectedSeats: number[]) => void;
}