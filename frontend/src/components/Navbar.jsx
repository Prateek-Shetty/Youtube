import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search/${query}`);
  };

  return (
    <div className="flex items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-red-600">YouTube Clone</h1>
      <form onSubmit={handleSearch} className="flex ml-6 w-1/2">
        <input
          className="flex-grow border px-3 py-2 rounded-l-lg"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button className="bg-gray-200 px-4 rounded-r-lg">🔍</button>
      </form>
    </div>
  );
}