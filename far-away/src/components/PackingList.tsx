import { Trash } from "lucide-react";
import type { Item } from "../App";

function PackingList({
  itemList,
  handlePackedStatus,
}: {
  itemList: Item[];
  handlePackedStatus: (id: number) => void;
}) {
  return (
    <div className=" max-w-2xl mx-auto rounded-2xl my-5 max-h-[500px] overflow-y-auto">
      <ul className="flex flex-col justify-center gap-4 p-10">
        {itemList.map((item) => (
          <li
            key={item.id}
            className="bg-amber-900/60 py-4 px-8 rounded-full gap-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  onChange={() => handlePackedStatus(item.id)}
                  className="w-6 h-6 accent-green-500"
                />
                <p className="text-white text-2xl font-semibold">
                  <span>{item.quantity}</span>
                  {item.itemName}
                </p>
              </div>
              <button>
                <Trash className="text-white hover:cursor-pointer hover:text-red-600" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
