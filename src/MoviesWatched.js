import { useState } from "react";
import MoviesSummary from "./MoviesSummary";
import WatchedMovie from "./WatchedMovie";
function MoviesWatched({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <MoviesSummary watched={watched} />
          <ul className="list">
            {watched.map((movie) => (
              <WatchedMovie movie={movie} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MoviesWatched;
