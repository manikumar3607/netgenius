import React, { useState } from "react";
import axios from "axios";

const UploadData = () => {
  const [file, setFile] = useState(null);
  const [datasetType, setDatasetType] = useState("occurrence");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("datasetType", datasetType);

    try {
      const response = await axios.post("http://localhost:5000/api/admin/upload", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Error uploading data");
    }
  };

  return (
    <div>
      <h3>Upload Data</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <select onChange={(e) => setDatasetType(e.target.value)}>
        <option value="occurrence">Occurrence</option>
        <option value="abundance">Abundance</option>
      </select>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default UploadData;

















//for preprocessing
// export default UploadData;
// import React, { useState } from "react";
// import axios from "axios";

// const UploadData = () => {
//   const [file, setFile] = useState(null);
//   const [datasetType, setDatasetType] = useState("");

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("datasetType", datasetType); // Empty for auto-processing

//     try {
//       const response = await axios.post("http://localhost:5000/api/admin/upload", formData);
//       alert(response.data.message);
//     } catch (error) {
//       alert("Error uploading data: " + error.response?.data?.error || error.message);
//     }
//   };

//   return (
//     <div>
//       <h3>Upload Data</h3>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <select onChange={(e) => setDatasetType(e.target.value)} value={datasetType}>
//         <option value="">Auto-process (Both Occurrence and Abundance)</option>
//         <option value="occurrence">Occurrence</option>
//         <option value="abundance">Abundance</option>
//       </select>
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default UploadData;
