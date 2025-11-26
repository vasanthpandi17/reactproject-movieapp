import { createContext, useState } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movie) => {
    const exists = watchlist.some((m) => m.id === movie.id);
    if (exists) {
      setWatchlist(watchlist.filter((m) => m.id !== movie.id));
    } else {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <WatchListContext.Provider value={{ watchlist, toggleWatchlist }}>
      {children}
    </WatchListContext.Provider>
  );
};