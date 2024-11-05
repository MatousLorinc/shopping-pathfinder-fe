import "./EditPathItemsPage.css";
import { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ItemsListCard } from "../../Components/ItemsListCard/ItemsListCard";
import {
  ItemControlType,
  TodoItemData,
} from "../../Components/ItemCard/ItemCardTypes";
import { ListItemData } from "../../Components/ItemsListCard/ItemsListCardTypes";

export default function EditPathItemsPage() {
  // Create test data matching the TodoItemData type
  const [userItems] = useState<TodoItemData[]>([
    { itemId: "a", title: "Item 1", category: 1 },
    { itemId: "b", title: "Item 2", category: 2 },
    { itemId: "c", title: "Item 3", category: 3 },
  ]);

  // Define the ListItemData object
  const userItemsList: ListItemData = {
    listTitle: "New list 1",
    todoItems: userItems,
  };

  // Create test data matching the TodoItemData type
  const [allItems] = useState<TodoItemData[]>([
    { itemId: "a", title: "Item a", category: 4 },
    { itemId: "b", title: "Item b", category: 5 },
    { itemId: "c", title: "Item c", category: 6 },
    { itemId: "d", title: "Item a", category: 4 },
    { itemId: "e", title: "Item b", category: 5 },
    { itemId: "f", title: "Item c", category: 6 },
    { itemId: "g", title: "Item a", category: 4 },
    { itemId: "h", title: "Item b", category: 5 },
    { itemId: "ch", title: "Item c", category: 6 },
    { itemId: "i", title: "Item a", category: 4 },
    { itemId: "j", title: "Item b", category: 5 },
    { itemId: "k", title: "Item c", category: 6 },
  ]);

  // Define the ListItemData object
  const allItemsList: ListItemData = {
    listTitle: "All Items",
    todoItems: allItems,
  };

  const onListTitleEdit = () => {
    console.log("onListTitleEdit");
  };
  const onNewListItemAdd = () => {
    console.log("onNewListItemAdd");
  };

  return (
    <div className="page shopping-paths-page">
      <div>
        <Navbar title="Add Path" showBackButton={true} />
        <div className="items-dual-box">
          <ItemsListCard
            listItemData={userItemsList}
            itemsEditable={false}
            itemsControlType={ItemControlType.RemoveItem}
            onListEdit={onListTitleEdit}
          />
          <ItemsListCard
            listItemData={allItemsList}
            itemsEditable={true}
            itemsControlType={ItemControlType.AddItem}
            onListAdd={onNewListItemAdd}
          />
        </div>
      </div>
    </div>
  );
}
