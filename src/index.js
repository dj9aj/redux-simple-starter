import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyB6O_mQBco8IPgOuiZ3TkRLRoYC4xUs1JU';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }   
}


ReactDOM.render(<App />, document.querySelector('.container'));