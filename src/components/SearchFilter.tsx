import { useState } from 'react';

interface Props{
    onChangeEvent : (event: React.ChangeEvent<HTMLSelectElement>)=> void;
}

function SearchFilter(props:Props) {

    const movieGenre = [
        'None','Action','Romance','Comedy','Science-Fi','Animation','Thriller',
        'Horror','Drama'
    ];
    const [movieGenreInput, setMovieGenreInput] = useState("");


    // Ensure the map function returns the <option> elements
    const displayMovieGenres = () => {
        return movieGenre.map((item, index) => (
            <option value={item.toLowerCase()} key={index}>{item}</option>
        ));
    };

  
    return (
        <div className="container p-3">
            <div className="container">
                {/* Corrected onChange handler */}
                
                <div className="col">
                    <div className="input-group mb-3">
                        <label className="input-group-text">Movie Genre</label>
                        <select 
                            className="form-select" 
                            id="inputGroupSelect01" 
                            value={movieGenreInput} // Bind to state
                            onChange={(e)=>{
                                setMovieGenreInput(e.target.value);
                                props.onChangeEvent(e);
                            }} // Update state on selection
                        >
                            {displayMovieGenres()} {/* Correctly render genres */}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;
