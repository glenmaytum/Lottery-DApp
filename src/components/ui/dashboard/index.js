import React from "react";
import StatsSection from "../statsSection";
import UserData from "../userData";
import AdminControls from "../AdminControls";

export default function Dashboard({
  allAddresses, //arr
  balance, //int
  contractAddress, //string
  managerAddress, //string
}) {
  console.log(allAddresses, balance, contractAddress, managerAddress);
  return (
    <main className="container mx-auto px-6 py-8 grid grid-row-3 gap-6">
      <h3 className="text-gray-700 text-3xl font-medium mb-4">Dashboard</h3>
      <AdminControls />
      <StatsSection balance={balance} entries={allAddresses.length} />
      <UserData />
    </main>
  );
}
