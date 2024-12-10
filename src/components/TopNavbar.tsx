import { useState } from "react"
import { MouseEvent } from "react";
import SearchBar from "./SearchBar";

interface Props{
    headerName : string;
    clickEvent : (event:MouseEvent)=>void;
   
}

function TopNavbar( props:Props) {

  const [inputValue,setInputValue] = useState("");

  return (
    <>
    <nav className="navbar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white">{props.headerName}</a>
    <SearchBar clickEvent={props.clickEvent}></SearchBar>
  </div>
</nav>
    </>
  )
}

export default TopNavbar