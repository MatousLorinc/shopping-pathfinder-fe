import { IconButton } from "../../Components/IconButton/IconButton";
import AddIcon from "@mui/icons-material/Add";
import "./EditPathItemsPage.css";
import { Navbar } from "../../Components/Navbar/Navbar";

export default function EditPathItemsPage() {
  return (
    <div className="page shopping-paths-page">
      <div>
        <Navbar title="Add Path" showBackButton={true} />
        <div className="shopping-paths col5">
          <p className="shopping-paths-text">Select path to start shopping</p>
          <p className="shopping-paths-text">
            Add new shopping path by pressing plus button below
          </p>
          <IconButton href="/#edit-path" icon={AddIcon} size={60} />
        </div>
      </div>
    </div>
  );
}
