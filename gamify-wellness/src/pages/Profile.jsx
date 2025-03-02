import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const user = { name: "Alice", asanas: 10, points: 120 };

  return (
    <div>
      <Navbar />
      <ProfileCard user={user} />
    </div>
  );
};

export default Profile;