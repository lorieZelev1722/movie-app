import { useState } from 'react';
import { MouseEvent } from 'react';

interface Props{
   clickEvent: (event:MouseEvent) => void;
}

function SearchBar(props:Props) {

    const [searchValue,setSearchValue] = useState("");

    return (
       <>
       <form className="d-flex" role="search">
        <input value={searchValue} className="form-control me-2" type="search" placeholder="Search Movie" aria-label="Search Movie" onChange={
         (e)=>{
            setSearchValue(e.currentTarget.value);

            }}/>
        <button className="btn btn-secondary" type="button" onClick={props.clickEvent} >Search</button>
        </form>
       </>
    )
}

export default SearchBar;
