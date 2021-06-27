import React from "react";
import { useState } from "react";

function SearchBar(props) {
    const { onSearch} =props;
    const [searchText,setSearchText] = useState("")
    const handleInput = (e) => {
        const text = e.target.value
        setSearchText(text)
    }
    const handleEnterKeyPressed = (e) => {
        if (e.key === "Enter"){
            onSearch(searchText)
        }
    }

    const handleClick = (e) => {
      if (e){
        onSearch(searchText)
      }
    }



    // This is the constructor that shall store our data retrieved from the database
   return (
    <div class="container mt-5">
      <div class="row text-center search-area">
        <div class="col-md-6 offset-md-3">
          
              <div class="input-group rounded">
              <input type="search" class="form-control rounded" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                value={searchText}placeholder="Write your wallet address" aria-label="Search"
              aria-describedby="search-addon" />
              <span class="input-group-text border-0" id="search-addon" onClick={handleClick}>
              <i class="fas fa-search" ></i>
              </span>
              </div>
              
        </div>
      </div>
    </div>
    

   )
}
export default SearchBar;
    

