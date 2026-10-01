import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMovieList";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
// import { useEffect } from "react";

export const ApiKey = "b4ec1a51";

export default function App() {
  // useEffect(() => {}, []);
  return (
    <>
      <Header>
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <SearchBar />
        <p className="num-results">
          Found <strong>0</strong> results
        </p>
      </Header>
      <main className="main">
        <MovieList />
        <WatchedMovieList />
      </main>
      {/* Movie Details Modal Overlay (Renders conditionally when selectedId exists) */}
      {/* <MovieDetails /> */}
    </>
  );
}
