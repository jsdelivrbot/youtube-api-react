import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// Import components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'


const API_KEY = "AIzaSyDD0OIOG4cdYHkdyECuwTsLKD9aIbmZfSA";


// Builds the complete App.
class App extends Component {

  constructor(props){
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'Huawei' }, videos => {
      this.setState({ videos });
    });
  }

  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={ this.state.videos } />
      </div>
    )
  }

}
// Render in DOM
ReactDOM.render( <App />, document.querySelector(".container") );
