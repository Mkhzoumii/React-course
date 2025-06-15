const MovieList = (props) => {
  return (
    <div>
      {" "}
      {props.MovieLest.map((movie, index) => {
        return <div key={index} className="text-white">{movie}</div>;
      })}
    </div>
  );
};
export default MovieList;
