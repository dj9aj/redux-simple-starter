import React, { Component } from 'react';

// Set up as Class so that the searchBar has additional functionality supplied by React.Component. Using the 'extends' keyword ensures that the searchBar class will have access to the functiionality within React.Component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    
    render() {
        // Listen for 'change' event on the input. When change event occurs, the onInputChange method is called
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div> 
        ); 
    }
}


export default SearchBar;