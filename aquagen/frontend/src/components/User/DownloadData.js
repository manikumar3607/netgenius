import React, { useState } from "react";
import axios from "axios";

const DownloadData = () => {
  const [datasetType, setDatasetType] = useState("occurrence"); // State for selected dataset type

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/usercon/download?datasetType=${datasetType}`,
        { responseType: "blob" } // This ensures the response is treated as a file
      );

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${datasetType}_data.csv` // Filename based on dataset type
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert("Error downloading data"); // Alert if download fails
    }
  };

  return (
    <div>
      <h3>Download Data</h3>
      {/* Dropdown to select dataset type */}
      <select value={datasetType} onChange={(e) => setDatasetType(e.target.value)}>
        <option value="occurrence">Occurrence</option>
        <option value="abundance">Abundance</option>
      </select>
      {/* Download button */}
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadData;
