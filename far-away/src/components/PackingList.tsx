import type { Item } from "../App";

function PackingList({ itemList }: { itemList: Item[] }) {
  console.log(itemList);

  return <div>packing list</div>;
}

export default PackingList;
