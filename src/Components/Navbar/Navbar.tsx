import "./Navbar.css";
import { IconButton } from "../IconButton/IconButton";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type IconButtonProps = {
  showBackButton?: boolean;
  title: string;
};

export const Navbar: React.FC<IconButtonProps> = ({
  showBackButton = false,
  title,
}) => {
  return (
    <nav className="navbar col4">
      {showBackButton ? (
        <IconButton
          href="/#"
          icon={ArrowBackIosIcon}
          size={38}
          iconSizeMultiplier={0.7}
          iconMarginLef={11}
        />
      ) : (
        ""
      )}
      <h1 className="navbar-title">{title}</h1>
    </nav>
  );
};
