import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import one from './Imagenes/1.jpg'
import two from './Imagenes/2.jpg'
import three from './Imagenes/3.jpg'
import four from './Imagenes/4.jpg'
import five from './Imagenes/5.jpg'
import six from './Imagenes/6.jpg'
import './Slider.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  
}));


 const tileData = [
   {
  img: one,
 },

 {
    img: two,
   },
   {
    img: three,
   },
   {
    img: four,
   },
   {
    img: five,
   },
   {
    img: six,
   },
 ];
 
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className= "pres">
    <div className={classes.root} >
      <GridList className={classes.gridList}cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile style= {{padding: '0px', height: 350}} className= "Tile" key={tile.img}>
            <img src={tile.img} alt='imagenes' />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
  );
}
