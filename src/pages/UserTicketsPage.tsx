import { useEffect, useState } from "react";
import {useBooking} from '../hooks/BookingContext'
import { useAuth } from "../hooks/AuthContext";
import '../styles/UserTicketsPage.sass'
import jsPDF from "jspdf";
import QRCode from "qrcode";

const generatePDF = async (ticket: {
  movieTitle: string,
  sessionId: string,
  data: any
}) => {
  const { movieTitle, sessionId, data } = ticket;

  const qrText = `Movie: ${movieTitle}\nSession: ${sessionId}\nSeats: ${data.seats.join(', ')}\nName: ${data.user.name}\nEmail: ${data.user.email}`;
  const qrCodeDataURL = await QRCode.toDataURL(qrText);

  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('Your Ticket', 20, 20);
  doc.setFontSize(12);
  doc.text(`Movie: ${movieTitle}`, 20, 40);
  doc.text(`Session ID: ${sessionId}`, 20, 50);
  doc.text(`Seats: ${data.seats.join(', ')}`, 20, 60);
  doc.text(`Name: ${data.user.name}`, 20, 70);
  doc.text(`Email: ${data.user.email}`, 20, 80);

  doc.addImage(qrCodeDataURL, 'PNG', 20, 90, 100, 100);

  doc.save(`ticket-${movieTitle}-${sessionId}.pdf`);
};

export const UserTicketsPage = () => {
    const { getUserBookings } = useBooking();
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState<{ sessionId: string, movieTitle: string, data: any }[]>([]);
      
    useEffect(() => {
        console.log(user)
        if (user?.phone) {
          const fetchBookings = () => {
            const userTickets = getUserBookings(user.phone);
            setMyBookings(userTickets);
            console.log("Loaded bookings:", userTickets);
          };
          fetchBookings();
        }
      }, [user, getUserBookings]);
      
    return (
        <div className="userTicketsCont">
            <h1 className="userTicketsCont__title">My Tickets</h1>
            {myBookings.length === 0 && (
                <>
                    <p className="userTicketsCont__noTickets">No tickets found.</p>
                    <a href='/home'>Book some!</a>
                </>
            ) }
                <div className="userTicketsCont__cardList">
                {myBookings.map(({ sessionId, movieTitle, data }, idx) => (
                    <div key={idx} className="ticketCard">
                      <p className="title"><strong>Movie title: </strong>{movieTitle}</p>
                      <p className="id"><strong>Session ID:</strong> {sessionId}</p>
                      <p className="seatsN"><strong>Seats:</strong> {data.seats.join(', ')}</p>
                      <p className="name"><strong>Name:</strong> {data.user.name}</p>
                      <p className="email"><strong>Email:</strong> {data.user.email}</p>
                      <button className="ticketBtn btn" 
                        onClick={() => generatePDF({ movieTitle, sessionId, data })}>
                          Get QR-code</button>
                    </div>
                ))}
                </div>

        </div>
    );
}
