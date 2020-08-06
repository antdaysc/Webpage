import React, {useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import clinics2 from '../clinics2.jpg'
import './Fotos.css';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import Eventos from './Eventos/Eventos.js'
import Pacientes from './Pacientes/Pacientes.js'
import Informacion from './Informacion/Informacion.js'
import Conferencias from './Conferencias/Conferencias.js'
import Mobilidad from './Mobilidad/Mobilidad.js'
import tileData from './tileData.js'




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '60%' ,
    height: '70%',
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function AlbumElement({tile}) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  return(
    <GridListTile key={tile.img} cols = {2} >
      <img src={tile.img} alt={tile.title} onClick={()=>setIsOpen(true)} />
      <ReactBnbGallery
        key={tile.img}
        show={isOpen}
        photos={tile.gallery}
        onClose={()=>setIsOpen(false)}
      />
      <GridListTileBar
        title={tile.title}
        subtitle={<span> {tile.author}</span>}
      />
    </GridListTile>
  )
}
 

export default function Album() {
  const classes = useStyles();

  return (
    <div>
    <div className="Header">
      <h1>Galeria</h1>
       <img src={clinics2} alt= "fondo"  />
       </div>
    <div className= 'base'>
    <div  style= {{marginTop: '10%'}} className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} style= {{marginBottom: '10%'}} cols = {2}>
        {tileData.map((tile, index) => <AlbumElement tile = {tile} />)}
      </GridList>

    </div>
    </div>
    </div>
  );
}

