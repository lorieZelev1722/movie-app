import { useState } from "react";
import { useEffect } from "react";
import TopNavbar from "./components/TopNavbar";
import Content from "./components/Content";
import { MouseEvent } from "react";


function App(){
  const [searchMovie,setSearchMovie] = useState("");
  const [searchMovieGenre,setSearchMovieGenre] = useState("");
  const [movieListData, setMovieListData] = useState([]);

 // Function to fetch movie data
 const retrieveMovieAPI = () => {
  const apiURL = `https://www.omdbapi.com/?s=${searchMovie || searchMovieGenre || 'all'}&apikey=c30817fb`
  
  // Fetch the data from OMDb API
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
     
        setMovieListData(data.Search); // Store the fetched movies
      } else {
        console.error("Error: ", data.Error); 
        setMovieListData([]);// Handle errors from the API
      }
    })
    .catch(
      (error) => {console.error("Error fetching data:", error);
                  setMovieListData([]);
            }
      );
};

 


  const headerName = "Movie App";
  const clickEvent = (event: MouseEvent) => {
    // Ensure previous sibling is an input element
    const input = event.currentTarget.previousElementSibling as HTMLInputElement;
    if (input) {
      setSearchMovie(input.value);
    }
    console.log(input.value);
  };

  const changeEventInSearchFilter = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setSearchMovieGenre(event.target.value);
        
  };

  //retrive movies
  useEffect(() => {
    retrieveMovieAPI(); // Fetch data when searchMovie changes or initially
  }, [searchMovie,searchMovieGenre]);

  return <div>
    <TopNavbar headerName={headerName} clickEvent={clickEvent}></TopNavbar>
    <Content onChangeEvent={changeEventInSearchFilter} movieList={movieListData}></Content>
  </div>;
}

export default App;