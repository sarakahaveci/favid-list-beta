import React from 'react';
import './index.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from 'react-bootstrap';
import db from '../firebaseConfig';



function Video(props) {
    
    const [id_on_firebase, setId_on_firebase] = React.useState(props.videoDetails.id_on_firebase);
    const [id_on_youtube, setId_on_youtube] = React.useState(props.videoDetails.id_on_youtube);
    const [id, setId] = React.useState(props.videoDetails.id);
    const [isArchived, setIsArchived] = React.useState(props.videoDetails.isArchived);
    const [isViewed, setIsViewed] = React.useState(props.videoDetails.isViewed);
    const [rating, setRating] = React.useState(props.videoDetails.rating);
    const [title, setTitle] = React.useState(props.videoDetails.title);
    const [date, setDate] = React.useState(props.videoDetails.date);
    
    function deleteVideo() {
        db.collection('YouTube').doc(id_on_firebase).delete();
    }

    function archive() {
        db.collection("YouTube").doc(id_on_firebase).update({
            isArchived: true
        });
        setIsArchived(!isArchived);
    }

    function unArchive() {
        db.collection("YouTube").doc(id_on_firebase).update({
            isArchived: false
        });
        setIsArchived(!isArchived);
    }

    function setAsViewed() {
        db.collection("YouTube").doc(id_on_firebase).update({
            isViewed: true
        });
        setIsViewed(!isViewed);
    }

    function setAsUnviewed() {
        db.collection("YouTube").doc(id_on_firebase).update({
            isViewed: false
        });
        setIsViewed(!isViewed);
    }

    function updateRating(newRating) {
        db.collection("YouTube").doc(id_on_firebase).update({
            rating: newRating
        });
        setRating(newRating);
    }

    const iframeSRC = `https://www.youtube.com/embed/${id_on_youtube}`

    const videoContainer= {
        border: '1px solid black',
        textAlign: 'center',
        margin: '20px 10px',
        width: '25%',
        height: 'auto',
        paddingBottom: '8px'
    }

    const elementStyle = {
        marginBottom: '-4px'
    }

    return (
        <div style={videoContainer}>
            {/* Setting video frame */}
            <iframe width="100%" height="auto" src={iframeSRC} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            {/* Displaying video title */}
            <p style={elementStyle}>{title}</p>
            
            {/* Displaying date of video adding */}
            <p style={elementStyle}>{date}</p>

            {/* Displaying video rating with the ability to update the value */}
            <Box style={{marginTop: '10px', marginBottom: '-8px'}} component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend"></Typography>
                <Rating
                name={`simple-controlled${id}`}
                value={rating}
                onChange={(event, newRating) => {
                    updateRating(newRating);
                }}
                />
            </Box>

            {/* Creating a button to delete the video */}
            <Button id="btn" onClick={deleteVideo} style={elementStyle} variant="danger" size="sm">Delete</Button>
            
            {/* Creating a button to set the video as archived */}
            {
              !isArchived && (
                <Button id="btn" onClick={archive} style={elementStyle} variant="secondary" size="sm">Archive</Button>
              )
            }

            {/* Creating a button to set the video as archived */}
            {
              isArchived && (
                <Button id="btn" onClick={unArchive} style={elementStyle} variant="primary" size="sm">Unarchive</Button>
              )
            }
            
            {/* Creating a button to set the video as viewed */}
            {
              !isViewed && (
                <Button id="btn" onClick={setAsViewed} style={elementStyle} variant="success" size="sm">Set as Viewd</Button>
              )
            }

            {/* Creating a button to set the video as unviewed */}
            {
              isViewed && (
                <Button id="btn" onClick={setAsUnviewed} style={elementStyle} variant="warning" size="sm">Set as Unviewd</Button>
              )
            }
            
        </div>
        
    );
}

export default Video;

