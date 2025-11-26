import React, { useContext, useState, useMemo } from "react";
import { WatchListContext } from "../context/WatchListContext";
import Moviecard from "../components/Moviecard";
import GenreFilter from "../components/GenreFilter";

const Watchlist = () => {
  const { watchlist } = useContext(WatchListContext);

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  // Create unique genre list from watchlist
  const genreList = useMemo(() => {
    return [
      "All",
      ...new Set(watchlist.flatMap((m) => m.genres || [])),
    ];
  }, [watchlist]);

  // Filter movies by search + genre
  const filteredMovies = watchlist.filter((movie) => {
    const matchesSearch =
      movie.name.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || movie.genres?.includes(genre);

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="p-4 pt-20 text-white min-h-screen">

      {/* Title */}
      <h1 className="text-center text-3xl font-bold mb-8">
        Watchlist ({watchlist.length})
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search in watchlist..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-600 
                   bg-gray-900 bg-opacity-60 backdrop-blur-md text-white 
                   block mx-auto mb-6 mt-1"
      />

      {/* Genre Filter */}
      <GenreFilter
        genres={genreList}
        selectedGenre={genre}
        onChange={setGenre}
      />

      {/* Movie List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-center w-full text-gray-400">
            No movies found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
