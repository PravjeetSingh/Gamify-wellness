import AuthForm from "../components/AuthForm";
import Navbar from "../components/Navbar";

const Signin = () => {
  const handleSignin = (email, password) => {
    console.log("Signing in with", email, password);
  };

  return (
    <div>
      <Navbar />
      <AuthForm onSubmit={handleSignin} buttonText="Sign In" />
    </div>
  );
};

export default Signin;