import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'; // Import the AppointmentForm component

const DoctorCard = ({ doctor }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBookAppointment = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-card-header">
        <h2>{doctor.name}</h2>
        <p className="doctor-specialty">{doctor.specialty}</p>
      </div>
      <div className="doctor-card-details">
        <p>Experience: {doctor.experience}</p>
        <p>Rating: {doctor.rating} stars</p>
      </div>
      <button className="book-appointment-button" onClick={handleBookAppointment}>
        Book Appointment
      </button>
      {showForm && <AppointmentForm doctor={doctor} onClose={handleCloseForm} />}
    </div>
  );
};

export default DoctorCard;
