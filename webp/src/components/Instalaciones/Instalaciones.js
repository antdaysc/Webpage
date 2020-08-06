import React from 'react';
import clinics2 from '../clinics2.jpg'
import instalaciones from './Instalaciones.jpg'
import './instalaciones.css';


const Instalaciones= () => {
  return (
    <div>
    <div className="Header">
      <h1>Instalaciones</h1>
       <img src={clinics2}  alt= "fondo"  />
       </div>
       <div className="Detalle">
<div className= "Instalaciones">
<div className= "Imagenes">
<img src={instalaciones}  alt= "instalaciones"  />
  </div>
  <div className= "Descripcion">
    <div className= "texto">
  <h>Visita nuestras instalaciones!</h>
  <p><strong>Conoce nuestro equipo que nos conforma junto con Traumatología y Dra en Rehabilitación!
Conoce nuestros servicios</strong></p>
  <p>Nuestra clínica tiene un enfoque único neurodeportivo en el area de Rehabilitación para diferentes
     rangos de edad y grupos mediante protocolos especializados .</p>

   <p> Asimismo se busca trabajar en la prevención de lesiones y/o secuelas por lo que se realizan protocolos 
    especializados basados en la historia clínica y en las necesidades individuales de cada paciente.

</p>
</div>
  </div>
  
  </div>
      
    </div>
    </div>
  )
}

export default Instalaciones

