import React from "react";
import UploadData from "./UploadData";
import DisplayData from "./DisplayData";
import EditData from "./EditData";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <UploadData />
      <DisplayData />
      <EditData />
    </div>
  );
};

export default AdminDashboard;
