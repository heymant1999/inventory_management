import React from "react"
import NavBar from "../components/NavBar";
import InventorySummary from "../components/InventorySummary";
import { InventoryTable } from "../components/InventoryTable";
const Dashboard = () => {
  return (
    <>
    <NavBar/>
    <InventorySummary/>
    <InventoryTable/>
    </>
  );
};

export default Dashboard;
