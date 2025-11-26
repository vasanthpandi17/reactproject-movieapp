import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";

const Moviecard = ({ movie }) => {
  const { watchlist, toggleWatchlist } = useContext(WatchListContext);

  // check if movie already in watchlist
  const isSaved = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="bg-gray-600 p-4 rounded-lg shadow-md text-white relative">

      <img
        src={movie.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
        alt={movie.name}
        className="w-full h-80 object-cover rounded-sm"
      />

      <h3 className="text-lg font-bold mt-4">{movie.name}</h3>

      <p className="text-sm text-gray-300">
        {movie.premiered || "No release date"}
      </p>

      {/* Heart icon toggles */}
      <button
        onClick={() => toggleWatchlist(movie)}
        className="absolute top-2 right-2 text-red-500 text-xl"
      >
        {isSaved ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Moviecard;
