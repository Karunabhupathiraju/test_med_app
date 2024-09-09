import React, { useState } from 'react';
import './AppointmentForm.css';

const AppointmentForm = ({ doctor, onClose }) => {
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // Add this line
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Appointment booked for:', patientName, phoneNumber, appointmentDate, appointmentTime);
        onClose(); // Close the form after submission
    };

    return (
        <div className="appointment-form-overlay">
            <div className="appointment-form-container">
                <h2>Book Appointment with {doctor.name}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="patientName">Patient's Name:</label>
                        <input
                            type="text"
                            id="patientName"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text" // Changed type to text for phone number
                            id="phoneNumber"
                            value={phoneNumber} // Fixed value
                            onChange={(e) => setPhoneNumber(e.target.value)} // Fixed onChange
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="appointmentDate">Appointment Date:</label>
                        <input
                            type="date"
                            id="appointmentDate"
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="appointmentTime">Appointment Time:</label>
                        <input
                            type="time"
                            id="appointmentTime"
                            value={appointmentTime}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Book Appointment</button>
                    <button type="button" className="close-button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;
