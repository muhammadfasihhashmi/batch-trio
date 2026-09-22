import { useState } from "react";
import Header from "./components/Header";
import PackingForm from "./components/PackingForm";
import PackingList from "./components/PackingList";

export type Item = {
  id: number;
  quantity: number;
  itemName: string;
};

function App() {
  const [itemList, setItemList] = useState<Item[]>([]);
  return (
    <>
      <Header />
      <PackingForm setItemList={setItemList} />
      <PackingList itemList={itemList} />
    </>
  );
}

export default App;
