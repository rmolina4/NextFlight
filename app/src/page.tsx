import React from 'react';


export default function Home() {
    return (
        <div>
        <nav>
          <ul>
            <li>NextFlight</li>
            <li><a href="#">About</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
        </nav>
  
        <div className="background-image">
          <h1>Fly Cheap</h1>
          <p>
            NextFlight is your shortcut to finding affordable flights. Discover more. Spend less. Fly cheap with NextFlight.
          </p>
        </div>
  
        <div className="search-section">
          <h2>Find Cheap Flights</h2>
          <form action="#" method="GET">
            <label htmlFor="from">From?</label>
            <input type="text" id="from" name="from" required />
  
            <label htmlFor="to">To?</label>
            <input type="text" id="to" name="to" required />
  
            <label htmlFor="departure">Departure</label>
            <input type="text" id="departure" name="departure" required />
  
            <label htmlFor="return">Return</label>
            <input type="text" id="return" name="return" required />
  
            <label htmlFor="travelers">Travelers</label>
            <input type="text" id="travelers" name="travelers" required />
  
            <button type="submit">Search</button>
          </form>
        </div>
  
        <div className="study-abroad">
          <h2>Study Abroad</h2>
          <div className="study-abroad-content">
            <h5>Program</h5>
            <p>City</p>
            <img src="https://via.placeholder.com/150" alt="Study Abroad Image" />
          </div>
        </div>
      </div>
    );

};
