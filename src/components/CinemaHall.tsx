import React from "react";

type CinemaHallProps = {
  selectedSeats: number[];
  bookedSeats: number[];
  toggleSeat: (seat: number) => void;
};

const CinemaHall: React.FC<CinemaHallProps> = ({ selectedSeats, bookedSeats, toggleSeat }) => {
  return (
    <div className="seatsContainer">
      {Array.from({ length: 40 }, (_, i) => i + 1).map((seat) => (
        <button
          className="seat"
          key={seat}
          onClick={() => toggleSeat(seat)}
          style={{
            backgroundColor: bookedSeats.includes(seat)
              ? "red"
              : selectedSeats.includes(seat)
              ? "#1DE782"
              : "white",
            color: bookedSeats.includes(seat)
              ? "white"
              : selectedSeats.includes(seat)
              ? "white"
              : "#000",
          }}
          disabled={bookedSeats.includes(seat)}
        >
          {seat}
        </button>
      ))}
    </div>
  );
};

export default CinemaHall;