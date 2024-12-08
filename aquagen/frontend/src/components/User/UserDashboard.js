import React from "react";
import DisplayData from "./DisplayData";
import FilterData from "./FilterData";
import VisualizeData from "./VisualizeData";
import DownloadData from "./DownloadData";
const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <FilterData />
      <DisplayData />
      <VisualizeData />
      <DownloadData />
    </div>
  );
};

export default UserDashboard;
