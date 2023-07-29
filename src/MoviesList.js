import Movie from "./Movie";
function MoviesList({ movies, getMovieId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie getMovieId={getMovieId} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesList;
