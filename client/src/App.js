import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import Slideshow from './components/Slideshow/Slideshow';
import TextNavbar from './components/TextNavbar/TextNavbar';
import Footer from './components/Footer/Footer';
import detectIcon from './assets/detect.png';
import submitIcon from './assets/search.png';
import Phone from './pages/Phone';
import FAQ from './pages/FAQ';
import Tv from './pages/Tv';
import Laptop from './pages/Laptop';
import Lifestyle from './pages/Lifestyle';

const App = () => {
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);
  const [facilityDetails, setFacilityDetails] = useState([]);
  const [realAddress, setRealAddress] = useState('');

  const cities = ["Bangalore", "Jaipur", "Mumbai", "Delhi", "Ludhiana"];

  const selectCity = async (city) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/locations/city?city=${city}`);
      const data = await response.json();
      setFacilityDetails(data);
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching the facilities in the selected city.");
    }
  };
  const getRealAddress = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await response.json();
      setRealAddress(data.display_name);
    } catch (error) {
      console.error(error);
    }
  };

  const detectLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLatitude(position.coords.latitude);
        setUserLongitude(position.coords.longitude);
        getRealAddress(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported in this browser.");
    }
  };

  const findNearestFacility = async () => {
    try {
      if (userLatitude && userLongitude) {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/locations?latitude=${userLatitude}&longitude=${userLongitude}`);
        const data = await response.json();
        setFacilityDetails(data);
      } else {
        alert("Please detect your location first.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching the nearest facilities.");
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/" element={
            <>
              <Slideshow images={['assets/slide1.jpg', 'assets/slide2.jpeg', 'assets/slide3.jpg']} />
              <TextNavbar />
              <div className="app-container2">
                <h3>Find an e-waste collection centre near you.</h3>
                <div className="button-container">
                  <button onClick={detectLocation}>
                    <img src={detectIcon} alt="Detect Location" className="detect-icon" />
                  </button>
                  <input
                    type="text"
                    id="address"
                    placeholder="Detect Your Location"
                    value={realAddress}
                    readOnly
                  />
                  <button onClick={findNearestFacility}>
                    <img src={submitIcon} alt="Submit" className="submit-icon" />
                  </button>
                  <div>
                    {cities.map((city, index) => (
                      <button key={index} className="city-button" onClick={() => selectCity(city)}>
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="facility-details">
                  {facilityDetails.length > 0 &&
                    facilityDetails.map((facility, index) => (
                      <div key={index} className="facility-card">
                        <div className="facility-name-box">
                          <p className="facility-name">{facility.name.toUpperCase()}</p>
                        </div>
                        <p className="facility-address"><span className="keyword">Address:</span> {facility.address}</p>
                        <p className="facility-capacity"><span className="keyword">Capacity:</span> {facility.capacity}</p>
                        <div className="facility-phone">
                          <span><span className="keyword">Phone:</span> </span>
                          <a href={`tel:${facility.phone}`}>
                            {facility.phone}
                          </a>
                        </div>
                        <p className="facility-contact-person"><span className="keyword">Contact Person:</span> {facility.contact_person}</p>
                        <p className="facility-distance"><span className="keyword">Distance:</span> {(facility.distance / 1000).toFixed(2)} kilometers away</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;