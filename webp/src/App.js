import React, { Component } from 'react';
import Navbar from './components/Navs/navs'
import { Route, BrowserRouter } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio'
import Instalaciones from './components/Instalaciones/Instalaciones'
import Investigacion from './components/Investigacion/Investigacion'
import Nosotros from './components/Nosotros/Nosotros'
import Fotos from './components/Fotos/Fotos'
import Album from './components/Galeria/album'
import Servicios from './components/Servicios/Servicios'
import Protocolos from './components/Protocolos/Protocolos'
import Map from './components/Map/Map'
import 'font-awesome/css/font-awesome.min.css'
import SideDrawer from './components/Navs/Sidebar/SideDrawer';
import Backdrop  from './components/Navs/Backdrop/Backdrop';
import Contacto from './components/Contacto/Contact'
import Footer from './components/footer'



class App extends Component {

  state= {
    sideDrawerOpen: false
  };
drawerToggleClickHandler = ()=> {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });


};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
}


  render() {
    
    let backdrop;
    if( this.state.sideDrawerOpen){
      backdrop = <Backdrop click= {this.backdropClickHandler}/>
    }
    return (
      
      <BrowserRouter>
        <div className="App" style={{height: '100%'}}>
          <Navbar  drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <Route exact path='/' component={Inicio} />
          <Route path= '/Contacto' component= {Contacto} />
          <Route path='/Instalaciones' component={Instalaciones} />
          <Route path='/Investigacion' component={Investigacion} />
          <Route path='/Nosotros' component={Nosotros} />
          <Route path='/Protocolos' component={Protocolos} />
          <Route path='/Galeria' component={Fotos} />
          <Route path='/Rehabilitacion' component={Album} />
          <Route path='/Servicios' component={Servicios} />
          
          <div className="Map">
          

<div className= "mapa">
  <div className= "texto">
<span>Agenda tu consulta!</span>
<p></p>
<h><strong>Clinical Move</strong></h>
<p>Rio Tamesis 2001 Colonia Estrella
Torreón, Mexico 27010</p>
<h><strong>Horario</strong></h>
 <p>
   <div>
   <p>Lunes a viernes de 08:00 a 20:00 hrs.</p>
   <p>Sábado de 08:00 a 14:00 hrs.</p>
 
 </div>
 </p>
 <h><strong>Atención</strong></h>
 <p> Dra. Raquel E. Serna Valdés  -Médico en rehabilitación- </p>
 <p>LFT. Brenda Pérez Muñiz  -Fisioterapia especializada en Neurodeportivo-</p>
 <p>LFT. Gustavo Antonio Hernández Villa  -Fisioterapia especializado en Neurodeportivo-
</p>
</div>
</div>
<div className= "mapamun">
          <Map
            googleMapURL= { `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDBr8UrEUrSo8PIY5X-Jx8ZPw1JHaiQ3Is`}
            containerElement= { <div style= {{height: '350%'}}/>,<div style= {{position: 'relative',  paddingTop: '20%'}} />}
            mapElement = {<div style= {{height: '350px'}} />}
            loadingElement = {<p>Cargando</p>}
          />
          </div>
          </div>
        </div>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;