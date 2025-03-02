const Rating = ({ difficulty, setDifficulty }) => {
    return (
      <div>
        <label>Rate Difficulty: </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
    );
  };
  
  export default Rating;