import { useEffect, useState } from "react";

const apiUrl = "https://www.omdbapi.com/?apikey=1d8b7f34&s=harry";

function MovieList() {
  const { movies, setMovies } = useState([]);

  console.log(movies);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (!response.ok) throw new Error("some thing went wrong");
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div className="box">
      <button className="btn-toggle">-</button>

      <ul className="list list-movies">
        <li>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
            alt="Inception poster"
          />
          <h3>Inception</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>2010</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MovieList;
