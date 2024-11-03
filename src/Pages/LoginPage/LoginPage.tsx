//import { useState } from "react";
import {
  GoogleLoginButton,
  GoogleJwtPayload,
} from "../../Components/GoogleLoginButton/GoogleLoginButton";
import { useUser } from "../../Context/UserContext/useUser";

export default function LoginPage() {
  const { user, setUser } = useUser(); // Get setUser from context
  //const [user, setUser] = useState<GoogleJwtPayload | null>(null);

  const handleLoginSuccess = (user: GoogleJwtPayload) => {
    console.log("user loged in: ", user);

    setUser(user);
  };

  return (
    <>
      <h1>LoginPage</h1>
      {user ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}
