const ProfileCard = ({ user }) => {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Asanas Completed: {user.asanas}</p>
        <p>Points: {user.points}</p>
      </div>
    );
  };
  
  export default ProfileCard;