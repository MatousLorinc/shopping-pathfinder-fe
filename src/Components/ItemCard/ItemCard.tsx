import "./ItemCard.css";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { ItemControlType } from "./ItemControlType";
import Checkbox from "@mui/material/Checkbox";
import IconButtonMui from "@mui/material/IconButton";

type ItemCardProps = {
  title: string;
  category: string;
  editable?: boolean;
  controlType?: ItemControlType;
  onAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  title,
  category,
  editable = false,
  controlType = ItemControlType.None,
  onAdd,
  onEdit,
}) => {
  return (
    <div className="item-card col9">
      <div className="item-card-action-control">
        {controlType == ItemControlType.Chekbox ? (
          <Checkbox />
        ) : controlType == ItemControlType.AddItem ? (
          <IconButtonMui
            onClick={onAdd}
            className="item-card-add-button"
            aria-label="icon button"
          >
            <AddIcon />
          </IconButtonMui>
        ) : (
          <div></div>
        )}
      </div>
      <p className="item-card-title">{title}</p>
      <p className="item-card-category">{category}</p>
      <div className="item-card-action-edit">
        {editable ? (
          <IconButtonMui
            onClick={onEdit}
            className="item-card-add-button"
            aria-label="icon button"
          >
            <EditIcon />
          </IconButtonMui>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
