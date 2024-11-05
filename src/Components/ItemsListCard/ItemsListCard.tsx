import { ItemCard } from "../ItemCard/ItemCard";
import { ItemControlType } from "../ItemCard/ItemCardTypes";
import "./ItemsListCard.css";
import React, { useState } from "react";
import IconButtonMui from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { ListItemData } from "./ItemsListCardTypes";
import { SearchBar } from "../Searchbar/Searchbar";
import { ModalCard } from "../Modal/ModalCard/ModalCard";

type ItemsListCardProps = {
  listItemData: ListItemData;
  itemsEditable: boolean;
  itemsControlType: ItemControlType;
  onListEdit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onListAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ItemsListCard: React.FC<ItemsListCardProps> = ({
  onListEdit,
  onListAdd,
  listItemData,
  itemsEditable,
  itemsControlType,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [addItemModalOpen, setAddItemModalOpen] = React.useState(false);
  const toggleAddItemModalModal = () => setAddItemModalOpen(!addItemModalOpen);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredItems = listItemData.todoItems.filter((todoItem) =>
    todoItem.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="items-list col8">
      <div className="items-list-header col7">
        <h3 className="items-list-title">{listItemData.listTitle}</h3>
        {onListEdit ? (
          <IconButtonMui
            onClick={onListEdit}
            className="items-list-button"
            aria-label="icon button"
          >
            <EditIcon />
          </IconButtonMui>
        ) : onListAdd ? (
          <>
            <IconButtonMui
              onClick={toggleAddItemModalModal}
              className="items-list-button"
              aria-label="icon button"
            >
              <AddIcon />
            </IconButtonMui>
            <ModalCard
              open={addItemModalOpen}
              handleOpen={toggleAddItemModalModal}
              title="ADD NEW ITEM"
            >
              <div>aaaa</div>
            </ModalCard>
          </>
        ) : (
          ""
        )}
        <div className="items-list-searchbar">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="items-list-content">
        {filteredItems.map((todoItem) => (
          <ItemCard
            key={todoItem.itemId}
            title={todoItem.title}
            category={todoItem.category}
            editable={itemsEditable}
            controlType={itemsControlType}
          />
        ))}
      </div>
    </div>
  );
};
