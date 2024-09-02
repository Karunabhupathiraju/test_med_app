import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Add Link to navigate to Instant Consultation */}
        <Link to="/instant-consultation">
            <button>Instant Booking Consultation</button>
          </Link>
      </header>
      <Routes>
          {/* Define the route for Instant Consultation */}
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
