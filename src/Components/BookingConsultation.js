// src/components/BookingConsultation.js
import React, { useState } from 'react';
import DoctorCard from './DoctorCard/DoctorCard';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';

import './BookingConsultation.css'; // Create and style this file as needed

const BookingConsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors] = useState([
    { id: 1, name: 'Dr. Robert', experience: '10 years', rating: '4.8', specialty: 'Dentist', image: '/images/doctor1.png' },
    { id: 2, name: 'Dr. Bhanu', experience: '8 years', rating: '4.5', specialty: 'Gynecologist', image: '/images/doctor2.png' },
    { id: 3, name: 'Dr. Revathi', experience: '5 years', rating: '4.7', specialty: 'Dermatologist', image: '/images/doctor3.png' },
    { id: 4, name: 'Dr. Vikas', experience: '12 years', rating: '4.9', specialty: 'General Physician', image: '/images/doctor4.png' },
    { id: 5, name: 'Dr. Gupta', experience: '6 years', rating: '4.6', specialty: 'ENT Specialist', image: '/images/doctor5.png' },
    { id: 6, name: 'Dr. William ', experience: '15 years', rating: '4.9', specialty: 'Homeopath', image: '/images/doctor6.png' },
    { id: 7, name: 'Dr. Linda ', experience: '7 years', rating: '4.4', specialty: 'Ayurveda', image: '/images/doctor7.png' },
    { id: 8, name: 'Dr. Prasad', experience: '9 years', rating: '4.7', specialty: 'Pediatrician', image: '/images/doctor8.png' },
  ]);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="booking-consultation">
      <h1>Find and Book a Doctor</h1>
      <FindDoctorSearch onSelectDoctor={handleDoctorSelect} />
      <div className="doctor-cards-container">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onClick={() => handleDoctorSelect(doctor)}
          />
        ))}
      </div>
      {selectedDoctor && (
        <div className="selected-doctor-info">
          <h2>Selected Doctor: {selectedDoctor.name}</h2>
          {/* You can add more details about the selected doctor here */}
        </div>
      )}
    </div>
  );
};

export default BookingConsultation;
