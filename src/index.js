import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. this component should produce some html
const App = () => { // ES6 syntax
    // this is jsx: <div>Hi</div>, which generates the html when transpiled
    return <div>Hi</div>;
}

// take this component's generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
