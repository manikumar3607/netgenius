import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayData = () => {
  const [data, setData] = useState([]); // State for storing fetched data
  const [datasetType, setDatasetType] = useState("occurrence"); // State for selected dataset type

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/admin/fetch?datasetType=${datasetType}`
      );
      setData(response.data); // Set the fetched data in state
    } catch (error) {
      alert("Error fetching data"); // Show error alert if fetching fails
    }
  };

  return (
    <div>
      <h3>Display Data</h3>
      {/* Dropdown to select dataset type */}
      <select value={datasetType} onChange={(e) => setDatasetType(e.target.value)}>
        <option value="occurrence">Occurrence</option>
        <option value="abundance">Abundance</option>
      </select>
      {/* Submit button to fetch the selected dataset */}
      <button onClick={fetchData}>Submit</button>
      {/* Data display */}
      <table border="1" style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Depth</th>
            <th>Species</th>
            {datasetType === "abundance" && <th>CatchWeight</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.Date}</td>
                <td>{item.Latitude}</td>
                <td>{item.Longitude}</td>
                <td>{item.Depth}</td>
                <td>{item.Species}</td>
                {datasetType === "abundance" && <td>{item.CatchWeight}</td>}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={datasetType === "abundance" ? 6 : 5}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
