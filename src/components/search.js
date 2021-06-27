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
    // This is the constructor that shall store our data retrieved from the database
   return (
    <div class="container-fluid">
      <div class="row text-center search-area">
        <div class="col-xs-12 text-center area1">
          
          <div class="row">
            <div class="input-group search-area col-xs-8 col-xs-offset-2 text-center d-flex justify-content-center">
              <span class="input input--minoru">
              <input className="input__field input__field--yoko" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                value={searchText} type ="text" placeholder="Write your wallet address"/>
                <label class="input__label input__label--yoko" for="input">
                  <span class="input__label-content input__label-content--yoko">Wallet Search</span>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    

   )
}
export default SearchBar;
    

