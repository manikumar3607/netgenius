import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/fetch");
      setData(response.data);
    } catch (error) {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Display Data</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Depth</th>
            <th>Species</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Date}</td>
              <td>{item.Latitude}</td>
              <td>{item.Longitude}</td>
              <td>{item.Depth}</td>
              <td>{item.Species}</td>
              <td>{item.CatchWeight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
