export enum ItemControlType {
  Chekbox,
  AddItem,
  RemoveItem,
  None,
}

export type TodoItemData = {
  itemId: string;
  title: string;
  category: number;
};

export enum TodoItemCategories {
  Fruit = "Fruit",
  Vegetable= "Vegetable",
  Pet= "Pet",
  Toiletries= "Toiletries",
  Tea= "Tea",
  Pastry= "Pastry",
  Can= "Can",
  FrozenProduct= "FrozenProduct",
  Meat= "Meat",
  Dairy= "Dairy",
  Pasta= "Pasta",
  Snack= "Snack",
  Drink= "Drink",
  IceCream= "IceCream",
};

