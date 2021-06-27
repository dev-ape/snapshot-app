
import './App.css';
import './index.css';

import React, { useState } from "react";
import CardList from "./components/cardlist";
import SearchBar from "./components/search";
import source from "./components/source";
import Navbar from './components/navbar';
import Footer from './components/footer';

// We use Route in order to define the different routes of our application

function App() {
    const [state, setState] = useState({
        results :[]
    });

    const onSearch = async(text) => {
        const results =await source.get("/record/" + text)
        setState(prevState => {
            return {...prevState, results:results}
        })
    }

    return(
        <div className="App">
                <Navbar />
                <SearchBar onSearch = {onSearch} />
                <CardList results = {state.results} />
                <Footer />
        </div>
    )
   
}
export default App;
