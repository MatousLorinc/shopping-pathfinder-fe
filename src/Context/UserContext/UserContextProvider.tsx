import React, { useState, ReactNode } from "react";
import { GoogleJwtPayload } from "../../Components/GoogleLoginButton/GoogleLoginButton";
import { UserContext } from "./UserContext";

// Create a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<GoogleJwtPayload | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Export the context and provider
export { UserContext };
