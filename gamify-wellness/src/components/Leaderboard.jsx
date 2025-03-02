const Leaderboard = ({ users }) => {
    return (
      <div>
        <h2>Leaderboard</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name} - {user.points} points</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Leaderboard;