import React, { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  // Fetch movies by page
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows?page=${page}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error:", err));
  }, [page]);

  // Build Genre List
  const genreList = ["All", ...new Set(movies.flatMap((m) => m.genres || []))];

  // Apply Search + Genre Filters
  const filteredMovies = movies
    .filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((movie) =>
      genre === "All" ? true : movie.genres?.includes(genre)
    );

  return (
    <div className="p-4 pt-20">

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 
                   bg-gray-900 bg-opacity-60 backdrop-blur-md text-white 
                   fixed top-16 left-1/2 transform -translate-x-1/2 z-10"
      />

      {/* Genre Filter */}
      <GenreFilter
        genres={genreList}
        selectedGenre={genre}
        onChange={setGenre}
      />

      {/* Movie List */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
        {filteredMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container flex justify-between mt-6">
        <button
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
          className="bg-gray-700 text-white p-2 rounded disabled:opacity-50"
        >
          PREV
        </button>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-gray-700 text-white p-2 rounded"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Home;
