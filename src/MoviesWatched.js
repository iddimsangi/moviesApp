import WatchedMovie from "./WatchedMovie";
function MoviesWatched({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesWatched;
