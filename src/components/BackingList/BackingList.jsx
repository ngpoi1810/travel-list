import React, { useState } from "react";
import Item from "../Item";

export default function BackingList({
  items,
  handleDelItem,
  handleToggleItem,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedByItems;
  if (sortBy === "input") sortedByItems = items;
  if (sortBy === "description")
    sortedByItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));
  if (sortBy === "packed")
    sortedByItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedByItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleDelItem={handleDelItem}
            handleToggleItem={handleToggleItem}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description order</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
