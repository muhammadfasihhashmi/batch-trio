import { useState } from "react";
import Header from "./components/Header";
import PackingForm from "./components/PackingForm";
import PackingList from "./components/PackingList";

export type Item = {
  id: number;
  quantity: number;
  itemName: string;
  isPacked: boolean;
};

function App() {
  const [itemList, setItemList] = useState<Item[]>([]);
  console.log(itemList);

  function handlePackedStatus(id: number) {
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    );
  }
  return (
    <>
      <Header />
      <PackingForm setItemList={setItemList} />
      <PackingList
        itemList={itemList}
        handlePackedStatus={handlePackedStatus}
      />
    </>
  );
}

export default App;
