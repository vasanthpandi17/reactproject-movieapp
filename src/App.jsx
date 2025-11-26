import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { WatchListContextProvider } from "./context/WatchListContext";

function App() {
  return (
    <WatchListContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </WatchListContextProvider>
  );
}

export default App;
