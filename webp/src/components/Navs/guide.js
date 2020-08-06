import React from 'react';
import './guide.css';
import 'font-awesome/css/font-awesome.min.css';



  const Guide = () => {
  return (
   <nav  className= "guide-wrapper" >
        <ul className= "nav-guide" xs={12} sm={6} md={4}>
         <li><a href="/Contacto"><i class="fa fa-address-book fa-4x" style={{marginRight: "15%"}} ><span>Contacto</span></i></a></li>
         <li><a href="https://wa.me/528711085856"><i class="fa fa-calendar fa-4x"><span style={{marginLeft: "55%"}}>Cita</span></i></a></li>
         <li><a href="/Galeria"><i class="fa fa-camera-retro fa-4x" ><span style={{marginLeft: "16%"}}>Galeria</span></i></a></li>
         <li ><a href= "https://goo.gl/maps/1CzKDMxWzPpW4aPZ7"><i class="fa fa-location-arrow fa-4x" ><span style={{marginLeft: "15%"}}>Ubicacion</span></i></a></li>
         <li><a  href="/Rehabilitacion"><i class="fa fa-universal-access fa-4x"><span>Ejercicios</span></i></a></li>
        </ul>

        <ul className= "nav-guide-medium">
         <li><a href="/Contacto"><i class="fa fa-address-book fa-3x"><span>Contacto</span></i></a></li>
         <li><a href="https://wa.me/528711454870"><i class="fa fa-calendar fa-3x"><span style={{marginLeft: "30%"}}>Cita</span></i></a></li>
         <li><i class="fa fa-camera-retro fa-3x" href="/Galeria"><span style={{marginLeft: "10%"}}>Galeria</span></i></li>
         <li><a href= "https://goo.gl/maps/1CzKDMxWzPpW4aPZ7"><i class="fa fa-location-arrow fa-3x"><span style={{marginLeft: "10%"}}>Ubicacion</span></i></a></li>
         <li><a  href="/Rehabilitacion"><i class="fa fa-universal-access fa-3x" href="/Rehabilitacion" ><span>Ejercicios</span></i></a></li>
        </ul>

        <ul className= "nav-guide-small">
         <li><a href="/Contacto"><i class="fa fa-address-book fa-2x"><span style={{marginLeft: "-12%"}}>Contacto</span></i></a></li>
         <li><a href="https://wa.me/528711454870"><i class="fa fa-calendar fa-2x"><span style={{marginLeft: "5%"}}>Cita</span></i></a></li>
         <li><i class="fa fa-camera-retro fa-2x" href="/Galeria"><span style={{marginLeft: "-5%"}}>Galeria</span></i></li>
         <li><a href= "https://goo.gl/maps/1CzKDMxWzPpW4aPZ7"><i class="fa fa-location-arrow fa-2x"><span style={{marginLeft: "-3%"}}>Ubicacion</span></i></a></li>
         <li><a  href="/Rehabilitacion"><i class="fa fa-universal-access fa-2x" href="/Rehabilitacion" ><span style={{marginLeft: "-8%"}}>Ejercicios</span></i></a></li>
        </ul>

        <ul className= "nav-guide-xsmall">
         <li><a href="/Contacto"><i class="fa fa-address-book fa-x"><span style={{marginLeft: "15%"}}>Contacto</span></i></a></li>
         <li><a href="https://wa.me/528711454870"><i class="fa fa-calendar fa-x"><span style={{marginLeft: "30%"}}>Cita</span></i></a></li>
         <li><i class="fa fa-camera-retro fa-x" href="/Galeria"><span style={{marginLeft: "15%"}}>Galeria</span></i></li>
         <li><a href= "https://goo.gl/maps/1CzKDMxWzPpW4aPZ7"><i class="fa fa-location-arrow fa-x"><span style={{marginLeft: "15%"}}>Ubicacion</span></i></a></li>
         <li><a  href="/Rehabilitacion"><i class="fa fa-universal-access fa-x" href="/Rehabilitacion" ><span style={{marginLeft: "15%"}}>Ejercicios</span></i></a></li>
        </ul>
        
        
    </nav>


   
  )
}


   
  
export default Guide