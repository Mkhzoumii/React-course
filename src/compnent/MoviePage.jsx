import { use, useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [Movie, setMovie] = useState(() => {
    return { MovieLest: ["Harry Potter", "Die Hard"] };
  });
  function HandellAddMovie(newMovie) {
  setMovie((prevstat) => ({
    ...prevstat,
    MovieLest: prevstat.MovieLest.concat(newMovie),
  }));
}

  return (
    <div className="container col-12 col-md-6 my-3 border ">
      <AddMovie HandellAddMovie={HandellAddMovie}></AddMovie>
      <MovieList MovieLest={Movie.MovieLest} />
    </div>
  );
};
export default MoviePage;
