import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";

const Signup = () => {
  const handleSignup = (email, password) => {
    console.log("Signing up with", email, password);
  };

  return (
    <div>
      <Navbar />
      <AuthForm onSubmit={handleSignup} buttonText="Sign Up" />
    </div>
  );
};

export default Signup;