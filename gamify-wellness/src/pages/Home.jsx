import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h1 className="home-header">Welcome to Gamify Wellness</h1>
      <p className="home-description">
        Track your Yoga progress and compete with friends!
      </p>
      <div className="home-buttons">
        <button className="home-button">Get Started</button>
        <button className="home-button secondary">Learn More</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
