
import './App.css';
import './index.css';

import React, { useState } from "react";
import CardList from "./components/cardlist";
import SearchBar from "./components/search";
import source from "./components/source";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Moment from 'react-moment';

// We use Route in order to define the different routes of our application

Moment.globalFormat = 'DD-MM-YYYY';

function App() {
    const [state, setState] = useState({
        results :[],
        isQueryFinished: false
    });

    const onSearch = async(text) => {
        setState(prevState => { 
            return { 
                ...prevState, 
                isQueryFinished: false 
            }
        });

        const results = await source.get("/record/" + text);
        
        setState(prevState => {
            return {
                ...prevState, 
                results: results,
                isQueryFinished: true
            }
        })
    }

    return(
        <div className="App">
                <Navbar />
                <SearchBar onSearch = {onSearch} />
                <CardList results = {state.results} isQueryFinished = {state.isQueryFinished} />
                <Footer />
        </div>
    )
   
}
export default App;
