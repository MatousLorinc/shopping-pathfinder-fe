import "./IconButton.css";
import React from "react";
import IconButtonMui from "@mui/material/IconButton";
import { SvgIconProps } from "@mui/material/SvgIcon";

type IconButtonProps = {
  icon: React.ElementType<SvgIconProps>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string; // Optional href prop
  size?: number;
  iconSizeMultiplier?: number;
  iconMarginLef?: number;
};

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon: Icon,
  size = 24,
  iconSizeMultiplier = 0.85,
  iconMarginLef = 0,
  href,
}) => {
  const buttonContent = (
    <IconButtonMui
      onClick={onClick}
      className="add-item-button"
      aria-label="icon button"
      style={{ width: size, height: size }}
    >
      <Icon
        className="add-item-button-icon"
        style={{
          width: size * iconSizeMultiplier,
          height: size * iconSizeMultiplier,
          marginLeft: iconMarginLef,
        }}
      />
    </IconButtonMui>
  );

  return href ? (
    <a href={href} className="icon-button-link">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};
