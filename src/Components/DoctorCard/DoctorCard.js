import React, { useState } from 'react';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'; // Ensure you import the AppointmentForm component

const DoctorCard = ({ doctor }) => {
    const [showAppointmentForm, setShowAppointmentForm] = useState(false);

    const handleBookAppointment = () => {
        setShowAppointmentForm(true);
    };

    const handleCancelAppointment = () => {
        // Implement cancellation logic here
        console.log('Appointment cancelled for:', doctor.name);
    };

    const handleCloseForm = () => {
        setShowAppointmentForm(false);
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
            <div className="doctor-card-options-container">
                <button className="book-appointment-button" onClick={handleBookAppointment}>
                    Book Appointment
                </button>
                <button className="cancel-appointment-button" onClick={handleCancelAppointment}>
                    Cancel Appointment
                </button>
            </div>
            {showAppointmentForm && (
                <AppointmentForm doctor={doctor} onClose={handleCloseForm} />
            )}
        </div>
    );
};

export default DoctorCard;
