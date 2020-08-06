import React, {Component} from 'react';
import './navs.css';
import logot2 from '../Imagenes/logot2.png'
import ToggleButton from './Toggle-button/toggle-button.js';
import 'font-awesome/css/font-awesome.min.css';
import {NavHashLink as NavLink} from 'react-router-hash-link'

class  Navbar extends Component {
  state= {
    className: "menu"
  };
  state = {
  lol: logot2
  };



  
  componentDidMount() {
    document.addEventListener("scroll", () => {
     const scrolled= window.scrollY ;
     

        
        if(scrolled > 150){
          this.setState({className: "menu3"})
          this.setState({lol: logot2})

        }
        else if (scrolled === 0 ){
          this.setState({className: "menu"})
          this.setState({lol: logot2})
        }
      

      
    })
  }

  render(){
  
  return (
    
   <nav  className= "nav-wrapper" >
      <div className={this.state.className|| "menu"}>
       <img src={ this.state.lol} alt= "icono"  />
       <div className= "spacer" />
       <div>
          <ToggleButton  click= {this.props.drawerClickHandler}/>
        </div>
       <div className="menu-items" >
        <ul>
         <li><NavLink exact to= "/">Inicio</NavLink></li>
         <li><NavLink to = "Nosotros">Nosotros</NavLink></li>
         <li>
           <NavLink exact to = "/Servicios">Servicios</NavLink>
           <div className="dropdown">
            <h style={{paddingLeft: '10%'}}>Servicios</h>
         <ul>
         <li><NavLink exact to = "/Servicios/#articular">Valoración y análisis Biomecánico & Articular</NavLink></li>
         <li><NavLink exact to = "/Servicios/#lesiones">Prevención y manejor de lesiones</NavLink></li>
         <li><NavLink exact to = "/Servicios/#deporte">Estudio del deporte</NavLink></li>
         <li><NavLink exact to = "/Servicios/#complementos">Desarrollo de complementos</NavLink></li>
         <li><NavLink exact to = "/Servicios/#rendimiento">Técnicas para mejorar rendimiento</NavLink></li>
         <li><NavLink exact to = "/Servicios/#sensoroperceptual">Manejo Sensoroperceptual</NavLink></li>
         </ul>

         
         </div>
         <div className="dropdown2">
            <h style={{paddingLeft: '10%'}}>Protocolos</h>
         <ul>
         <li><NavLink exact to = "/Protocolos/#sport">Tarjeta Sport</NavLink></li>
         <li><NavLink exact to = "/Protocolos/#gym">Tarjeta Gymgirl</NavLink></li>
         <li><NavLink exact to = "/Protocolos/#morada">Tarjeta Morada</NavLink></li>
         <li><NavLink exact to = "/Protocolos/#naranja">Tarjeta Naranja</NavLink></li>
         <li><NavLink exact to = "/Protocolos/#blanca">Tarjeta Blanca</NavLink></li>
         </ul>

         
         </div>
         </li>

         <li><NavLink to = "Instalaciones">Instalaciones</NavLink></li>
        </ul>
        </div>
      </div>
    </nav>
  )
}
}

   
  
export default Navbar