import React from "react";

type CinemaHallProps = {
  selectedSeats: number[];
  bookedSeats: number[];
  toggleSeat: (seat: number) => void;
};

const CinemaHall: React.FC<CinemaHallProps> = ({ selectedSeats, bookedSeats, toggleSeat }) => {
  return (
    <div className="seatsContainer">
      {Array.from({ length: 40 }, (_, i) => i + 1).map((seat) => {
        const isBooked = bookedSeats.includes(seat);
        const isSelected = selectedSeats.includes(seat);
        const seatClass = `seat ${isBooked ? "seat-booked" : ""} ${isSelected ? "seat-selected" : ""}`.trim();

        return (
          <button
            key={seat}
            className={seatClass}
            onClick={() => toggleSeat(seat)}
            disabled={isBooked}
          >
            {seat}
          </button>
        );
      })}
    </div>
  );
};

export default CinemaHall;
