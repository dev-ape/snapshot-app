
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

export class App extends React.Component {

    onSearch(text){
        this.cardList.onWalletSearch(text);
    }

    render() {
        return(
            <div className="App">
                <Navbar />
                <SearchBar onSearch={this.onSearch.bind(this)} />
                <CardList ref={cardList => this.cardList = cardList} />
                <Footer />
            </div>
        );
    }
   
}
export default App;
