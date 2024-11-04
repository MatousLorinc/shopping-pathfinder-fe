import "./EditPathItemsPage.css";
import { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ItemsListCard } from "../../Components/ItemsListCard/ItemsListCard";

export default function EditPathItemsPage() {
  const [items] = useState([
    { title: "Item 1", category: "Category A" },
    { title: "Item 2", category: "Category B" },
    { title: "Item 3", category: "Category C" },
  ]);

  const onListTitleEdit = () => {
    console.log("onListTitleEdit");
  };

  return (
    <div className="page shopping-paths-page">
      <div>
        <Navbar title="Add Path" showBackButton={true} />
        <div className="items-dual-box">
          <ItemsListCard
            title="New list 1"
            items={items}
            onEdit={onListTitleEdit}
          />
          <ItemsListCard title="All items" items={items} />
        </div>
      </div>
    </div>
  );
}
