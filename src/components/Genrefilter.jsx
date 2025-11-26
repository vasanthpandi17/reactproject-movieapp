const Genrefilter = ({ genres = [], selectedGenre, onChange }) => {
  return (
    <div className="flex justify-center mt-20">
      <select
        value={selectedGenre}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
      >
        {genres.length > 0 ? (
          genres.map((g, index) => (
            <option key={index} value={g}>
              {g}
            </option>
          ))
        ) : (
          <option>Loading genres...</option>
        )}
      </select>
    </div>
  );
};

export default GenreFilter;