import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import BackingList from "./components/BackingList";
import Stats from "./components/Stats";

const initialItems = [
  { id: 1, desc: "Passports", quantity: 2, packed: true },
  { id: 2, desc: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <BackingList
        items={items}
        handleDelItem={handleDelItem}
        handleToggleItem={handleToggleItem}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
