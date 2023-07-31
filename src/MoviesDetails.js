import { useEffect, useState } from "react";
import Loader from "./Loader";

function MoviesDetails({ selectedMovieID, KEY }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const movieSelected = async () => {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieID}`
        );
        const data = await response.json();
        console.log(data);
      };
      movieSelected();
    } catch (error) {}
  }, [selectedMovieID]);
  return (
    <h1>selected movie</h1>
    // <div className="details">
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <>
    //       <header>
    //         <button className="btn-back" onClick={onCloseMovie}>
    //           &larr;
    //         </button>
    //         <img src={poster} alt={`Poster of ${movie} movie`} />
    //         <div className="details-overview">
    //           <h2>{title}</h2>
    //           <p>
    //             {released} &bull; {runtime}
    //           </p>
    //           <p>{genre}</p>
    //           <p>
    //             <span>⭐️</span>
    //             {imdbRating} IMDb rating
    //           </p>
    //         </div>
    //       </header>
    //       <section>
    //         {/* <div className="rating">
    //               {!isWatched ? (
    //                 <>
    //                   <StarRating
    //                     maxRating={10}
    //                     size={24}
    //                     onSetRating={setUserRating}
    //                   />
    //                   {userRating > 0 && (
    //                     <button className="btn-add" onClick={handleAdd}>
    //                       + Add to list
    //                     </button>
    //                   )}
    //                 </>
    //               ) : (
    //                 <p>
    //                   You rated with movie {watchedUserRating} <span>⭐️</span>
    //                 </p>
    //               )}
    //             </div> */}
    //         <p>
    //           <em>{plot}</em>
    //         </p>
    //         <p>Starring {actors}</p>
    //         <p>Directed by {director}</p>
    //       </section>
    //     </>
    //   )}
    // </div>
  );
}

export default MoviesDetails;
