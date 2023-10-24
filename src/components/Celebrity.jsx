import React, { useState, useEffect } from 'react';

export default function Celebrity() {
  const [celebrityData, setCelebrityData] = useState([]);
  const [name, setName] = useState();
  const apiKey = '7tT/NYv8d0LnNTO0GSW6kQ==Yz2K6WQpioO6sMGJ';
  const [isLoading, setIsLoading] = useState(false);

  const handleCelebrityChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    setIsLoading(true); 

    fetch(`https://api.api-ninjas.com/v1/celebrity?name=${name}`, {
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
        setCelebrityData(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false); 
      });
  };

  return (
    <>
      <div className="container py-5">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a Celebrity Name"
            value={name}
            onChange={handleCelebrityChange}
          />
          <button className="btn btn-primary" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Nationality</th>
            <th scope="col">Net-Worth</th>
            <th scope="col">Occupition</th>
            <th scope="col">Birthday</th>
          </tr>
        </thead>
        <tbody>
        {celebrityData.map((c,index) => (
    <tr key={index}>
      <th scope="row">{c.name.toUpperCase()}</th>
      <td>{c.gender}</td>
      <td>{c.nationality}</td>
      <td>{c.net_worth}</td>
      <td>{Array.isArray(c.occupation) ? c.occupation.join(' , ') : c.occupation}</td>
      <td>{c.birthday}</td>
    </tr>
    ))}
    </tbody>
        </table>
        )}
        </>
  );
}
