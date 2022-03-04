// {} means, import React and pull of the Component as a variable Component
// i.e. const Component = React.Component
import React, { Component } from "react";

// functional component
// const SearchBar = () => {
//     return <input />;
// };

// class based component
class SearchBar extends Component {
    constructor(props) {
        super(props); // calls the constructor of the parent extends class
        this.state = { term: '' };
    }

    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;