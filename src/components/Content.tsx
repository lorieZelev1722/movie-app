import SearchFilter from "./SearchFilter"
import MovieList from "./MovieList";
import Modal from"./Modal";
import { useState,useEffect,MouseEvent} from "react";
import TotalText from "./TotalText";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface Props{
    onChangeEvent : (event: React.ChangeEvent<HTMLSelectElement>)=> void;
    movieList: Movie[];
}



const Content = (props:Props) => {

const [movieInfoData, setMovieInfoData] = useState([]);
const [imdbID, setImdbID] = useState<string | undefined>(undefined);
// console.log(imdbID);



  const onClickMovieInfo = (e:MouseEvent<HTMLAnchorElement>) =>{
       const imdbID_data = e.currentTarget.dataset.myData;
      setImdbID(imdbID_data);
  }
 
  const fetchMovieInfo = () =>{ // Fetch the data from OMDb API
    if(imdbID){
    const apiURL = `https://www.omdbapi.com/?i=${imdbID}&apikey=c30817fb`;

    fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        setMovieInfoData(data); // Store the fetched movies
      } else {
        console.error("Error: ", data.Error); 
        setMovieInfoData([]);// Handle errors from the API
      }
    })
    .catch(
      (error) => {console.error("Error fetching data:", error);
                  setMovieInfoData([]);
            }
      );
          }
 }
  

     useEffect(() => {
      fetchMovieInfo();
     }, [imdbID]); 
   

  

 
  return (
    <div className="container-lg">
    <SearchFilter onChangeEvent={props.onChangeEvent}></SearchFilter>
    <TotalText totalResult={props.movieList.length.toString()}></TotalText>
    <MovieList movieList={props.movieList} onClickMovieInfo={onClickMovieInfo}></MovieList>
    <Modal movieInfo={movieInfoData}></Modal>
    </div>
  )
}

export default Content