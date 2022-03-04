import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// get the api key from google api console:
const API_KEY = 'AIzaSyBXVDKNM48G5N5WYkBMyfplOT8FM5uorU8';

// // create a new component. this component should produce some html
// const App = () => { // ES6 syntax
//     // this is jsx: <div>Hi</div>, which generates the html when transpiled
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({ key: API_KEY, term: 'ujjal dey singapore' }, (videos) => {
            // console.log(videos);
            // this.setState({ videos }); // same as {videos:videos}
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take this component's generated html and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));
