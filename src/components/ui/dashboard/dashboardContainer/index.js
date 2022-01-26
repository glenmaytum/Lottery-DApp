import React from "react";
import { AdminStats, UserData } from "../../dashboard/sections/";
import AdminControls from "../controls/adminControls";

const DashboardContainer = () => {
  return (
    <main className="container mx-auto px-6 py-8 grid grid-row-3 gap-6">
      <h3 className="text-gray-700 text-3xl font-medium mb-4">Dashboard</h3>
      {/* <AdminControls /> */}
      <AdminStats />
      <UserData />
    </main>
  );
};

export default DashboardContainer;
