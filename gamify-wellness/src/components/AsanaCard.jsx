const AsanaCard = ({ asana }) => {
    return (
      <div>
        <h3>{asana.name}</h3>
        <p>Difficulty: {asana.difficulty}</p>
      </div>
    );
  };
  
  export default AsanaCard;