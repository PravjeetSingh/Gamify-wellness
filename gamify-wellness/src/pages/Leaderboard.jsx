import Leaderboard from "../components/Leaderboard";
import Navbar from "../components/Navbar";
import "./LeaderboardPage.css";
const LeaderboardPage = () => {
  const users = [
    { name: "Alice", points: 120 },
    { name: "Bob", points: 90 },
  ];

  return (
    <div className="leaderboard-container">
      <Navbar />
      <h1 className="leaderboard-title">Leaderboard</h1>
      <Leaderboard users={users} />
    </div>
  );
};

export default LeaderboardPage;
