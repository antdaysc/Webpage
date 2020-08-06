import React, {setIsOpen, Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import clinics2 from '../clinics2.jpg'
import VideoData from './List'
import './album.css';
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '40%' ,
    height: '70%',
    
  },
  
}));
 

const Album= (Component) => {
  
  const classes = useStyles();
 


  return (
    
    <div>
    <div className="Header">
      <h1>Rehabilitacion</h1>
       <img src={clinics2} alt= "fondo"  />
       </div>
    <div style= {{marginTop: '10%'}} className= 'guide'> 
    <div className={classes.root} >
      <GridList cellHeight={400} className={classes.gridList} style= {{marginBottom: '10%'}} cols={3}>
        {VideoData.map((video) => (

          <GridListTile key={video.img} >
            <video id="myOverlay" src={video.img} style= {{width: '100%', height: '100%'}} alt={video.title} />
            <video id="myVideo" src={video.img} style= {{width: '100%', height: '100%'}} alt={video.title} controls/>
            <div className="play-icon"
             role="button"
              onClick={() => this.hideComponent("myOverlay")}>
              </div>
            
            <GridListTileBar
              title={video.title}
              subtitle={<span> {video.author}</span>}
              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
    </div>
  );
}


export default Album

