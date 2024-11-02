import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShoppingPathsPage from "./Pages/ShoppingPathsPage/ShoppingPathsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import EditPathItemsPage from "./Pages/EditPathItemsPage/EditPathItemsPage";
import ActivePathPage from "./Pages/ActivePathPage/ActivePathPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShoppingPathsPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/edit-path" element={<EditPathItemsPage />}></Route>
      <Route path="/active-path" element={<ActivePathPage />}></Route>
    </Routes>
  );
}

export default App;
