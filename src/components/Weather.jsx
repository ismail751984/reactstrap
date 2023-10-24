import React, { useState, useEffect } from 'react';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Quetta'); 
  const apiKey = '7tT/NYv8d0LnNTO0GSW6kQ==Yz2K6WQpioO6sMGJ';
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []); 


return(
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
            <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                  value={city}
                  onChange={handleCityChange}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
             <center> <h5 className="card-title">{city}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Temp: {weatherData?.temp}°C</h6>
              </center>
              <i className="fas fa-wind fa-fw" ></i>
                       <span className="ms-1"> Wind:  <b>{weatherData?.wind_speed}</b> km/h</span>
                       <br /> <hr />
                 <i className="fas fa-tint fa-fw" ></i>
                       <span className="ms-1"> Humidity:  <b>{weatherData?.humidity}</b> %</span>
                       <br /> <hr />
                       <i className="fa-solid fa-sun"></i>
                       <span className="ms-1"> Sun-Rise:  <b>{(weatherData?.sunrise && new Date(weatherData.sunrise * 1000).toLocaleTimeString())}</b> </span>
                       <br /> <hr />
                       <i className="fas fa-sun fa-fw"></i>
                       <span className="ms-1"> Sun-Set:  <b>{(weatherData?.sunset && new Date(weatherData.sunset * 1000).toLocaleTimeString())}</b></span>
                       <br /> <hr />
                     
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

