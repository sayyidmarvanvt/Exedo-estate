import { useState } from "react";
import { useNavigate } from "react-router-dom";

const types = ["sale", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "sale",
    location: "",
    minPrice: "",
    maxPrice: "",
  });
  const navigate = useNavigate();

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    if (query.location) urlParams.set("location", query.location);
    if (query.type) urlParams.set("type", query.type);
    if (query.minPrice) urlParams.set("minPrice", query.minPrice);
    if (query.maxPrice) urlParams.set("maxPrice", query.maxPrice);
    navigate(`/search?${urlParams.toString()}`);
  };

  return (
    <div className="w-full">
      <div className="flex">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-9 py-3 border border-gray-400 border-b-0 capitalize ${
              query.type === type ? "bg-black text-white" : "bg-white"
            } ${
              type === "sale"
                ? "rounded-tl-md border-r-0"
                : "rounded-tr-md border-l-0"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-1 h-[64px] justify-between sm:border sm:border-gray-400"
      >
        <input
          type="text"
          name="location"
          placeholder="City Location"
          value={query.location}
          onChange={(e) =>
            setQuery((q) => ({ ...q, location: e.target.value }))
          }
          className="p-4 border border-gray-400 sm:w-[200px] sm:border-none"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          value={query.minPrice}
          onChange={(e) =>
            setQuery((q) => ({ ...q, minPrice: e.target.value }))
          }
          className="p-4 border border-gray-400 sm:w-[200px] sm:border-none"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          value={query.maxPrice}
          onChange={(e) =>
            setQuery((q) => ({ ...q, maxPrice: e.target.value }))
          }
          className="p-4 border border-gray-400 sm:w-[200px] sm:border-none"
        />
        <button
          type="submit"
          className="p-3 px-10 border border-gray-400 cursor-pointer bg-[#fece51] sm:border-none"
        >
          <img src="image/search.png" alt="" className="w-6 h-6 mx-auto" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
