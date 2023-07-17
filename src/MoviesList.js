import { useState } from "react";
import Movie from "./Movie";
import Button from "./Button";
function MoviesList({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <Button isOpen1={isOpen1} setIsOpen1={setIsOpen1} />
      {isOpen1 && (
        <ul className="list">
          {movies?.map((movie) => (
            <Movie movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesList;
