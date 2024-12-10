import React from 'react'
import { MouseEvent,useRef } from 'react';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

interface Props{
   movieList : Movie[];
   onClickMovieInfo : (e:MouseEvent<HTMLAnchorElement>) => void;
}

function MovieList(props:Props) {

    const style = {gap: '16px'};
    const cardWidth = {width: '20rem',maxWidth:'100%'};
   
    const displayMovies = () => {
        // Return the mapped JSX from the function
        if(props.movieList.length > 0){
        return Object.entries(props.movieList).map(([key, value], index) => {
            const movie = value as { Title: string; Year: string; imdbID: string; Type: string; Poster: string };
    
            return (
                <div className="col d-flex justify-content-center align-items-center" key={movie.imdbID}>
                    <div className="card" style={cardWidth}>
                        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">{movie.Type} | {movie.Year}</p>
                            <a href="#" className="btn btn-primary"  data-my-data={movie.imdbID} onClick={props.onClickMovieInfo}>View More</a>
                        </div>
                    </div>
                </div>
            );
        });
        }else{
            return <div className="p-3 text-danger bg-light border border-danger rounded-3">
            No Movie Found!
        </div>
        }
    };
    

    displayMovies();

  return (
    <div className='container-lg'>
        <div className='row' style={style}>
           {displayMovies()}
        </div>
    </div>

  )
}

export default MovieList