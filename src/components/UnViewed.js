import React from 'react';
import './index.css';
import LeftSidebar from './LeftSidebar'
import Video from './Video'



function UnViewed(props) {
    

  return (
    <div id="videos-container">
        <LeftSidebar />
        <div id="right-side">
            <div id="videosContainer">

            {
              props.videos.map( video => {
                if(!video.isViewed && !video.isArchived) {
                   return <Video videoDetails={video} />
                }
              })
            }
            
            </div>
        </div>
    </div>
  );
}

export default UnViewed;


