import React from 'react';
import clinics from '../clinics2.jpg'
import clinics2 from './Imagenes/sport.jpg'
import clinics3 from './Imagenes/gym.jpg'
import clinics4 from './Imagenes/morada.jpg'
import clinics5 from './Imagenes/naranja.jpg'
import clinics6 from './Imagenes/blanca.jpg'
import './Protocolos.css';


const Protocolos = () => {
  return (
    <div>
    <div className="Header">
      <h1>Protocolos</h1>
       <img src={clinics} alt= "fondos"  />
    </div>
    <div className= "Protocolos">
    
    <div id= "sport" className="Detalle">
      
      <div className= "Descripcion2">
      <div className= "texto">
    <h>Tarjeta Sport</h>
    <p>Es un protocolo de 4 sesiones deportivas las cuales se lleva un control especializado 
      muscular y articular para prevencion de lesiones.
    </p>
  
     
  </div>
    </div>
    <div className= "Imagenes">
  <img src={clinics2}  alt= "cita2"  />
    </div>
    </div>
    <div className= "ims">
  <img src={clinics2}  alt= "cita2"  />
    </div>

      <div id= "gym" className="Detalle">
  <div className= "Descripcion">
    <div className= "texto">
  <h>Tarjeta gymgirl</h>
  <p>Es un protocolo de 4 sesiones especializado para las niñasque aman
    el deporte artístico, las cuales se les lleva a un control especializado muscular
    y articular constante para prevenir lesiones. </p>
   
</div>
  </div>

  
  <div className= "Imagenes">
<img src={clinics3}  alt= "cita"  />
  </div>
  
      </div>
      <div className= "ims">
<img src={clinics3}  alt= "cita"  />
  </div>

      <div id= "morada" className="Detalle">
      
    <div className= "Descripcion2">
    <div className= "texto">
  <h>Tarjeta Morada</h>
  <p>Es un protocolo de 15 sesiones tras una lesión importante
    o post cirugía, con un tratamiento especializado de manera intensiva con un 
    enfoque neurodeportivo o neuro traumatológico
  </p>

   
</div>
  </div>
  <div className= "Imagenes">
<img src={clinics4}  alt= "cita2"  />
  </div>
  </div>
  <div className= "ims">
<img src={clinics4}  alt= "cita2"  />
  </div>

  <div id= "naranja" className="Detalle">
    <div className= "Descripcion">
    <div className= "texto">
  <h>Tarjeta Naranja</h>
  <p>Es un protocolo de 4 sesiones tras una lesión importante
    o post cirugía, con un tratamiento especializado de manera intensiva con un 
    enfoque neurodeportivo o neuro traumatológico
  </p>

   
</div>

  </div>
  <div className= "Imagenes">
<img src={clinics5}  alt= "cita"  />
  </div>
  </div>
  <div className= "ims">
<img src={clinics5}  alt= "cita"  />
  </div>

  <div id= "blanca" className="Detalle">
      
    <div className= "Descripcion2">
    <div className= "texto">
  <h>Tarjeta Blanca</h>
  <p>Es un protocolo de 10 sesiones tras una lesión importante
    o post cirugía, con un tratamiento especializado de manera intensiva con un 
    enfoque neurodeportivo o neuro traumatológico
  </p>

   
</div>
  </div>
  <div className= "Imagenes">
<img src={clinics6}  alt= "cita2"  />
  </div>
  </div>
  <div className= "ims">
<img src={clinics6}  alt= "cita2"  />
  </div>

      </div>
      </div>
  )
}

export default Protocolos 