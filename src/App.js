import React, { useState, useEffect } from 'react';
import './App.css';
import db from './firebaseConfig';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header'
import AllVideos from './components/AllVideos'
import UnViewed from './components/UnViewed'
import Viewed from './components/Viewed'
import Archive from './components/Archive'
import Footer from './components/Footer'
import Rating from './components/Rating'



function App() {

  const [videos, setVideos] = React.useState([]);

  const fetchData = async () => {
    const res = await db.collection('YouTube').get();
    const data = res.docs.map((video, index)=> Object.assign(video.data(), {id_on_firebase: video.id}));
    setVideos(data);
  };

  useEffect(() => {
    fetchData();
    refreshPage();
  }, []);

  // Continuously fetching
  function refreshPage(){
    fetchData();
    // Setting a timer to launch the function every 1 second continuously
    setTimeout(refreshPage, 1000);
  }

  const [viewStyle, setViewStyle] = React.useState("board-view");

  const changeStyle = () => {
    if(viewStyle === "list-view") {
      setViewStyle("board-view");
    } else {
      setViewStyle("list-view");
    }
  }

  
  return (
    <Router id="page-body">

      <Header videos={videos} />

      <Switch>
        <Route exact path="/">
          <AllVideos videos={videos} />
        </Route>
        <Route path="/allVideos"> 
          <AllVideos videos={videos} />
        </Route>
        <Route path="/unviewed"> 
          <UnViewed videos={videos} />
        </Route>
        <Route path="/viewed"> 
          <Viewed videos={videos} />
        </Route>
        <Route path="/archive"> 
          <Archive videos={videos} />
        </Route>
        <Route path="/rating/oneStar"> 
          <Rating videos={videos} ratingVal="1" />;
        </Route>
        <Route path="/rating/twoStars"> 
          <Rating videos={videos} ratingVal="2" />;
        </Route>
        <Route path="/rating/threeStars"> 
          <Rating videos={videos} ratingVal="3" />;
        </Route>
        <Route path="/rating/fourStars"> 
          <Rating videos={videos} ratingVal="4" />;
        </Route>
        <Route path="/rating/fiveStars"> 
          <Rating videos={videos} ratingVal="5" />;
        </Route>
      </Switch>

      <Footer />

    </Router>
    
  );
}

export default App;
