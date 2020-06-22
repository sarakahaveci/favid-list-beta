import React from 'react';
import './index.css';
import LeftSidebar from './LeftSidebar'
import Video from './Video'



function Rating(props) {

  return (
    <div id="videos-container">
        <LeftSidebar />
        <div id="right-side">
            <div id="videosContainer">

            {
              props.videos.map( video => {
                  console.log(props.ratingVal)
                if(video.rating == props.ratingVal && !video.isArchived) {
                   return <Video videoDetails={video} />
                }
              })
            }
            
            </div>
        </div>
    </div>
  );
}

export default Rating;
