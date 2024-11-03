import React from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// Define the structure of the decoded JWT token
export interface GoogleJwtPayload {
  sub: string; // The unique identifier for the user
  name?: string;
  email?: string;
  picture?: string;
}

type GoogleLoginButtonProps = {
  onLoginSuccess: (user: GoogleJwtPayload) => void;
};

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onLoginSuccess,
}) => {
  const handleLogin = (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;

    if (token) {
      const decoded = jwtDecode<GoogleJwtPayload>(token);
      console.log("decoded JWT", decoded);
      onLoginSuccess(decoded); // Pass decoded user info to parent
    } else {
      console.log("No credential found");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleLogin}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};
