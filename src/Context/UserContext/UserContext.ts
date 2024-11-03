import { createContext } from "react";
import { GoogleJwtPayload } from "../../Components/GoogleLoginButton/GoogleLoginButton";

// Define the shape of the context
export interface UserContextType {
  user: GoogleJwtPayload | null;
  setUser: (user: GoogleJwtPayload | null) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Export the context and provider
export { UserContext };
