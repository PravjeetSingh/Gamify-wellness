import { useState } from "react";
import Navbar from "../components/Navbar";

const LogAsana = () => {
  const [asana, setAsana] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged:", asana, difficulty);
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Asana Name" value={asana} onChange={(e) => setAsana(e.target.value)} />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <button type="submit">Log Asana</button>
      </form>
    </div>
  );
};

export default LogAsana;