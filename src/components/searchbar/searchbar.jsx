import { useState } from "react";
import "./searchbar.scss";

export default function SearchBar() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 1000,
    maxPrice: 2000,
  });

  const switchType = (currentType) => {
    setQuery((e) => ({ ...e, type: currentType }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text"
         name="location" placeholder="Location" />
        <input
          type="number"
          name="minPrice"
          min={1000}
          max={1000000}
          placeholder="Min. Price"
        />
        <input
          type="number"
          name="maxPrice"

          min={2000}
          max={10000000}
          placeholder="Max. Price"
        />
        <button>
          <img src="./search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}
