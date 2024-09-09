import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
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
      <button className="book-appointment-button">Book Appointment</button>
    </div>
  );
};

export default DoctorCard;
