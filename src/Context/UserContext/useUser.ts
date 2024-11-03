import { useContext } from "react";
import { UserContext } from "./UserContext"; // Adjust the path if needed

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
