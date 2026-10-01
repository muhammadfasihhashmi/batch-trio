function MovieDetails() {
  return (
    <div className="modal-overlay">
      <div className="details">
        <header>
          {/* <button className="btn-back" onClick={() => setSelectedId(null)}>
            &larr;
          </button> */}
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
          <p>Starring Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page</p>
          <p>Directed by Christopher Nolan</p>
        </section>
      </div>
    </div>
  );
}

export default MovieDetails;
