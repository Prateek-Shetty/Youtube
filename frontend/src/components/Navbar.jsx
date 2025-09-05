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
    <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-red-600 tracking-tight hover:scale-105 transition-transform duration-200 cursor-pointer">
        YouTube Clone
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex ml-6 w-1/2 max-w-xl border rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-red-500"
      >
        <input
          className="flex-grow px-4 py-2 text-gray-700 outline-none"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button
          className="bg-gray-100 hover:bg-gray-200 px-5 text-lg transition-colors duration-200"
        >
          🔍
        </button>
      </form>

      {/* User Avatar Placeholder */}
      <div className="ml-6">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold cursor-pointer hover:shadow-md">
          U
        </div>
      </div>
    </div>
  );
}



