import React, { useState } from 'react';
import './FindDoctorSearch.css';

const initSpecialities = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ENT) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities] = useState(initSpecialities);

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a Doctor and Consult Instantly</h1>
                <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="doctor-search-box">
                        <input 
                            type="text" 
                            className="search-doctor-input-box" 
                            placeholder="Search doctors, clinics, hospitals, etc." 
                            onFocus={() => setDoctorResultHidden(false)} 
                            onBlur={() => setDoctorResultHidden(true)} 
                            value={searchDoctor} 
                            onChange={(e) => setSearchDoctor(e.target.value)} 
                        />
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {specialities
                                .filter(speciality => speciality.toLowerCase().includes(searchDoctor.toLowerCase()))
                                .map(speciality => (
                                    <div 
                                        className="search-doctor-result-item" 
                                        key={speciality} 
                                        onMouseDown={() => handleDoctorSelect(speciality)}
                                    >
                                        <span>{speciality}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default FindDoctorSearch;
