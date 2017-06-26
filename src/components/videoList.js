import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) =>{

  // rendering the list of videos and passing props to videoListItem
  // key is important
const  listItem = props.vid.map((video)=>{
return <VideoListItem
onVideoSelect ={props.onVideoSelect}
key={video.etag} video = {video}/>;
});

  return (
        <ul  className = 'col-md-4  list-group'>
          {listItem}
        </ul>
  );

};

export default VideoList ;
