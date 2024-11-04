import { ItemCard } from "../ItemCard/ItemCard";
import { ItemControlType } from "../ItemCard/ItemControlType";
import "./ItemsListCard.css";
import React from "react";
import IconButtonMui from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

type ItemsListCardProps = {
  title: string;
  onEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ItemsListCard: React.FC<ItemsListCardProps> = ({
  title,
  onEdit,
}) => {
  return (
    <div className="items-list col8">
      <div>
        <h3 className="items-list-title">{title}</h3>
        {onEdit ? (
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

        <div>searchbar</div>
      </div>
      <div className="items-list-content">
        <ItemCard title="Banana1" category="fruit"></ItemCard>
        <ItemCard
          title="Banana2"
          category="fruit"
          editable={true}
          controlType={ItemControlType.AddItem}
        ></ItemCard>
        <ItemCard
          title="Bananaasa"
          category="fruit"
          editable={true}
          controlType={ItemControlType.Chekbox}
        ></ItemCard>
        <ItemCard
          title="Bananaasasas"
          category="fruit"
          editable={true}
          controlType={ItemControlType.None}
        ></ItemCard>
        <ItemCard title="Banana5" category="fruit"></ItemCard>
        <ItemCard title="Banana6" category="fruit"></ItemCard>
        <ItemCard title="Banana7" category="fruit"></ItemCard>
        <ItemCard title="Banana8" category="fruit"></ItemCard>
        <ItemCard title="Banana9" category="fruit"></ItemCard>
      </div>
    </div>
  );
};
