import { useEffect, useState } from "react";

interface MovieInfo {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[]; // Adjusted to expect an array
  Released: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

interface Props {
  movieInfo: MovieInfo | MovieInfo[]; // Support both single object and array
}

function Modal(props: Props) {
  const [selectedMovie, setSelectedMovie] = useState<MovieInfo | null>(null);

  // Log props to inspect the structure
  console.log(props.movieInfo);

  useEffect(() => {
    // Ensure movieInfo is always treated as an array
    const movieArray = Array.isArray(props.movieInfo) ? props.movieInfo : [props.movieInfo];
    if (movieArray.length > 0) {
      setSelectedMovie(movieArray[0]); // Select the first movie
    }
  }, [props.movieInfo]);

  useEffect(() => {
    if (selectedMovie) {
      showModal();
    }
  }, [selectedMovie]);

  // Show the modal
  const showModal = () => {
    const modalElement = document.getElementById("movieModal");
    if (modalElement) {
      const myModal = new window.bootstrap.Modal(modalElement);
      myModal.show();
    } else {
      console.error("Modal element not found");
    }
  };

  // Display movie details
  const displayMovieInfo = () => {
    if (!selectedMovie) return null;

    return (
      <div className="container my-5">
        <div className="row">
          {/* Left Column for Movie Poster */}
          <div className="col-md-4">
            <img
              src={selectedMovie.Poster}
              alt={selectedMovie.Title}
              className="img-fluid"
            />
          </div>

          {/* Right Column for Movie Details */}
          <div className="col-md-8">
            <h1>
              {selectedMovie.Title} ({selectedMovie.Year})
            </h1>
            <p>
              <strong>Rated: </strong>{selectedMovie.Rated}
            </p>
            <p>
              <strong>Genre: </strong>{selectedMovie.Genre}
            </p>
            <p>
              <strong>Released: </strong>{selectedMovie.Released}
            </p>
            <p>
              <strong>Runtime: </strong>{selectedMovie.Runtime}
            </p>
            <p>
              <strong>Language: </strong>{selectedMovie.Language}
            </p>
            <p>
              <strong>Country: </strong>{selectedMovie.Country}
            </p>
            <p>
              <strong>Box Office: </strong>{selectedMovie.BoxOffice}
            </p>
            <p>
              <strong>Awards: </strong>{selectedMovie.Awards}
            </p>
            <p>
              <strong>Metascore: </strong>{selectedMovie.Metascore}
            </p>
            <p>
              <strong>IMDb Rating: </strong>{selectedMovie.imdbRating} ({selectedMovie.imdbVotes} votes)
            </p>
            <p>
              <strong>Director: </strong>{selectedMovie.Director}
            </p>
            <p>
              <strong>Writer: </strong>{selectedMovie.Writer}
            </p>
            <p>
              <strong>Actors: </strong>{selectedMovie.Actors}
            </p>
            <p>
              <strong>Plot: </strong>{selectedMovie.Plot}
            </p>
          </div>
        </div>

        {/* Rating Section */}
        <div className="row mt-4">
          <div className="col">
            <h3>Ratings:</h3>
            <div className="list-group">
              {selectedMovie.Ratings.map((rating, index) => (
                <div key={index} className="list-group-item">
                  <strong>{rating.Source}:</strong> {rating.Value}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Production Section */}
        <div className="row mt-4">
          <div className="col">
            <p><strong>Production: </strong>{selectedMovie.Production}</p>
            <p><strong>Website: </strong>{selectedMovie.Website}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="modal fade"
      id="movieModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {selectedMovie?.Title || "Loading..."}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {displayMovieInfo()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
