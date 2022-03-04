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
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;