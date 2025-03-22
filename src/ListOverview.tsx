import React, { useState } from "react";

interface ListOverviewProps {
  listName: string;
  itemCount: number;
}

interface ListItemType {
  name: string;
  itemCount: number;
}

const listItems = [
  { name: "Amsterdam Trip", itemCount: 5 },
  { name: "Belgium Trip", itemCount: 3 },
  { name: "Monthly Expenses", itemCount: 10 },
];

const ListOverview = () => {
  const [lists, setLists] = useState<ListItemType[]>(listItems);
  const [selectedList, setSelectedList] = useState(null);

  return (
    <div className="list-overview list-none">
      <h2 className="pb-10">My Lists</h2>
      <ul>
        {lists.map((item, index) => (
          <li className="pb-5" key={index}>
            <strong>{item.name}</strong>
          </li>
        ))}
      </ul>
      <button>Create new list</button>
    </div>
  );
};

export default ListOverview;
