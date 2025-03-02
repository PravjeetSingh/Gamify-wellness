import { useState } from "react";
import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [users] = useState([
    { name: "Alice", points: 120 },
    { name: "Bob", points: 90 },
  ]);

  return (
    <div>
      <Navbar />
      <div>
        <h1>Dashboard</h1>
        <Leaderboard users={users} />
      </div>
    </div>
  );
};

export default Dashboard;