import React, { useState, useEffect } from "react";
import axios from "axios";

const VisualizeData = () => {
  const [data, setData] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the Google Map
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 5,
    });
    setMap(map);
  }, []);

  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    try {
      const response = await axios.get("http://localhost:5000/api/user/fetch", {
        params: { location: `${lat},${lng}` },
      });
      setData(response.data);
    } catch (error) {
      alert("Error fetching data for this location");
    }
  };

  useEffect(() => {
    if (map) {
      map.addListener("click", handleMapClick);
    }
  }, [map]);

  return (
    <div>
      <h3>Visualize Data</h3>
      <div id="map" style={{ height: "400px" }}></div>
      <div>
        <h4>Data for selected location:</h4>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.species} - {item.depth}m - {item.weight}kg
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisualizeData;
