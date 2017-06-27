import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
//components
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetails from './components/videoDetails';

const API_KEY = 'AIzaSyC5aVyYk9BjbPk5oCSFcFvHgymEs6ZT9-A';



class App extends Component{
constructor(props){
super(props);
this.state = {
              videos : [],
              selectedVideo : null,

          };
this.videoSearch("");
}


//youtube data sample this is how we call youtube-api-search
videoSearch(term){
YTSearch({key:API_KEY , term: term}, (videos) =>{
this.setState({videos: videos ,
  selectedVideo : videos[0]}
);
});
}
//render method using debounce allows us to delay the refresh
render(){
  const videoSearch = _.debounce(term =>{ this.videoSearch(term)} , 400);
  return (
    <div>
     <SearchBar  onSearchTermChange ={videoSearch}/>
     <VideoDetails video = {this.state.selectedVideo} />
     <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} vid = {this.state.videos}/>
  </div>
);

}

}

// Take the component and place it on the dom
ReactDOM.render(<App/> , document.querySelector('.container'));
