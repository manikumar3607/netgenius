import React, { useState } from "react";
import axios from "axios";

const FilterData = () => {
  const [species, setSpecies] = useState("");
  const [depth, setDepth] = useState("");
  const [location, setLocation] = useState("");

  const handleFilter = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/fetch", {
        params: { species, depth, location }
      });
      console.log(response.data); // Display the filtered data
    } catch (error) {
      alert("Error fetching filtered data");
    }
  };

  return (
    <div>
      <h3>Filter Data</h3>
      <input
        type="text"
        placeholder="Species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <input
        type="number"
        placeholder="Depth"
        value={depth}
        onChange={(e) => setDepth(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location (latitude,longitude)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default FilterData;
