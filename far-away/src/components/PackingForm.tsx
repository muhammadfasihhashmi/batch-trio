// steps for converting uncontrolled components in to controlled components
/**
1. Create a state variable to hold the value of the input field.
2. Set the value of the input field to the state variable.
3. Add an onChange event handler to the input field that updates the state variable with the new value.
4. Use the state variable to access the current value of the input field when needed.
5. on submiting we creata another event on form submit button that will execute in the seo handler funtion and we will use the state variable to access the current value of the input field and perform any necessary actions with it. and prevent the default form submission behavior by calling event.preventDefault() in the submit handler function.
*/

import { useState } from "react";

function PackingForm() {
  // step 1
  const [quantity, setQuantity] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // You can perform any necessary actions with the form data here
    const finalItem = {
      quantity,
      itemName,
    };
    console.log("Final item:", finalItem);
  }

  return (
    <form className="bg-amber-900 h-20 flex items-center justify-center gap-4">
      {/* quantity */}
      <select
        className=" py-4 px-8 rounded-full bg-yellow-200"
        value={quantity}
        onChange={handleQuantityChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {/* item name */}
      <input
        type="text"
        className=" p-4 rounded-full bg-amber-200"
        value={itemName}
        onChange={handleItemNameChange}
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-4 px-8 rounded-full cursor-pointer"
        onClick={handleSubmit}
      >
        Add Item
      </button>
    </form>
  );
}

export default PackingForm;
