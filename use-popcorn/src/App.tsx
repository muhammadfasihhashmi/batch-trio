import { useState } from "react";

export const ApiKey = "b4ec1a51";

export default function App() {
  // State to track if movie details overlay is open
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {/* Navigation Header */}
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input className="search" type="text" placeholder="Search movies..." />
        <p className="num-results">
          Found <strong>0</strong> results
        </p>
      </nav>

      {/* Main Content Layout */}
      <main className="main">
        {/* Left Box: Movie Search & List */}
        <div className="box">
          <button className="btn-toggle">-</button>

          <ul className="list list-movies">
            <li onClick={() => setSelectedId("tt1375666")}>
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

        {/* Right Box: Watched Movies Summary & List */}
        <div className="box">
          <button className="btn-toggle">-</button>

          <div className="summary">
            <h2>Movies you watched</h2>
            <div>
              <p>
                <span>#️⃣</span>
                <span>0 movies</span>
              </p>
              <p>
                <span>⭐️</span>
                <span>0.0</span>
              </p>
              <p>
                <span>🌟</span>
                <span>0.0</span>
              </p>
              <p>
                <span>⏳</span>
                <span>0 min</span>
              </p>
            </div>
          </div>

          <ul className="list">
            <li>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                alt="Inception poster"
              />
              <h3>Inception</h3>
              <div>
                <p>
                  <span>⭐️</span>
                  <span>8.8</span>
                </p>
                <p>
                  <span>🌟</span>
                  <span>10</span>
                </p>
                <p>
                  <span>⏳</span>
                  <span>148 min</span>
                </p>
                <button className="btn-delete">X</button>
              </div>
            </li>
          </ul>
        </div>
      </main>

      {/* Movie Details Modal Overlay (Renders conditionally when selectedId exists) */}
      {selectedId && (
        <div className="modal-overlay">
          <button onClick={() => setSelectedId(null)}>X</button>
          <div className="details">
            <header>
              <button className="btn-back" onClick={() => setSelectedId(null)}>
                &larr;
              </button>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                alt="Poster of movie"
              />
              <div className="details-overview">
                <h2>Inception</h2>
                <p>16 Jul 2010 &bull; 148 min</p>
                <p>Action, Adventure, Sci-Fi</p>
                <p>
                  <span>⭐️</span>8.8 IMDb rating
                </p>
              </div>
            </header>
            <section>
              <div className="rating">
                <p>Log your rating here</p>
                <button className="btn-add">+ Add to list</button>
              </div>
              <p>
                <em>
                  A thief who steals corporate secrets through the use of
                  dream-sharing technology...
                </em>
              </p>
              <p>
                Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page
              </p>
              <p>Directed by Christopher Nolan</p>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
