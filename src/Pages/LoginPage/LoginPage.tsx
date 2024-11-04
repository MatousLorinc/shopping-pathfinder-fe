//import { useState } from "react";
import {
  GoogleLoginButton,
  GoogleJwtPayload,
} from "../../Components/GoogleLoginButton/GoogleLoginButton";
import { useUser } from "../../Context/UserContext/useUser";
import "./LoginPage.css";
import AppLogo from "./../../Assets/shopping_cart_logo.png";

export default function LoginPage() {
  const { setUser } = useUser(); // Get setUser from context

  const handleLoginSuccess = (user: GoogleJwtPayload) => {
    //console.log("user loged in: ", user);
    setUser(user);
  };

  return (
    <div className="page login-page">
      <div className="login-card col8">
        <img className="login-card-icon" src={AppLogo} />
        <h1 className="login-card-subtitle">Shopping Pathfinder</h1>
        <h3 className="login-card-subtitle">Sign in</h3>
        <p className="login-card-text">Welcome, please sign in to continue</p>
        <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}
