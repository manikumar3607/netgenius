import React, { useState, useEffect } from "react";
import axios from "axios";

const EditData = () => {
  const [data, setData] = useState([]);
  const [datasetType, setDatasetType] = useState("occurrence");

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/fetch?datasetType=${datasetType}`);
      setData(response.data);
    } catch (error) {
      alert("Error fetching data");
    }
  };

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/delete?id=${id}&datasetType=${datasetType}`);
      alert("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      alert("Error deleting record");
    }
  };

  useEffect(() => {
    fetchData();
  }, [datasetType]);

  return (
    <div>
      <h3>Edit Data</h3>
      <select onChange={(e) => setDatasetType(e.target.value)}>
        <option value="occurrence">Occurrence</option>
        <option value="abundance">Abundance</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Depth</th>
            <th>Species</th>
            {datasetType === "abundance" && <th>CatchWeight</th>}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.Date}</td>
              <td>{item.Latitude}</td>
              <td>{item.Longitude}</td>
              <td>{item.Depth}</td>
              <td>{item.Species}</td>
              {datasetType === "abundance" && <td>{item.CatchWeight}</td>}
              <td>
                <button onClick={() => deleteRecord(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditData;
