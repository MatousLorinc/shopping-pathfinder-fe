import { Route, Routes } from "react-router-dom";
import "./App.css";
//import ShoppingPathsPage from "./Pages/ShoppingPathsPage/ShoppingPathsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import EditPathItemsPage from "./Pages/EditPathItemsPage/EditPathItemsPage";
import ActivePathPage from "./Pages/ActivePathPage/ActivePathPage";
import { useUser } from "./Context/UserContext/useUser";
import ShoppingPathsPage from "./Pages/ShoppingPathsPage/ShoppingPathsPage";

function App() {
  const { user } = useUser();

  if (user)
    return (
      <Routes>
        <Route path="/" element={<ShoppingPathsPage />}></Route>
        <Route path="/edit-path" element={<EditPathItemsPage />}></Route>
        <Route path="/active-path" element={<ActivePathPage />}></Route>
      </Routes>
    );
  else return <LoginPage />;
}

export default App;
