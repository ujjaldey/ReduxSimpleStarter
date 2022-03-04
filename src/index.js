import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

// get the api key from google api console:
const API_KEY = 'AIzaSyBXVDKNM48G5N5WYkBMyfplOT8FM5uorU8';

YTSearch({
    key: API_KEY, term: 'surfboards', function(data) {
        console.log(data);
    }
});

// create a new component. this component should produce some html
const App = () => { // ES6 syntax
    // this is jsx: <div>Hi</div>, which generates the html when transpiled
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// take this component's generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
