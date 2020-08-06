
import React from 'react';
import clinics2 from '../clinics2.jpg'
import './Nosotros.css';
import Formal from './Imagenes/Formal.jpg'
import Circle from './Imagenes/circle.png'
import Circle2 from './Imagenes/circle2.png'
import Rostros from './Imagenes/rostros.png'
import Trauma from './Imagenes/trauma.png'
import Bailar from './Imagenes/bailar.png'
import Sport from './Imagenes/sport.png'
import Neuro from './Imagenes/neuro.png'
import Dancer from './Imagenes/dancer.jpg'

const Nosotros= () => {
  return (
    <div className= "window">
    <div className="Header">
      
      <h1>Nosotros</h1>
       <img src={clinics2} alt= "fondo"  />
      
      </div>
      <div className= "box">
      <div className= "icon"><img src={Formal} alt= "sello" />
      </div>
      <div className="presentacion">
         Somos una Clínica con un programa especializado de adaptación y 
         recuperación con la relación neurológica y deportiva llevando a un control biomecánico para sus actividades
         en las cuales se desarrolla, realizando protocolos especializados para el mantenimiento, prevención y/o 
         recuperación de lesiones.
      </div>
      <div className="presentacion" >  
         El enfoque de la fisioterapia neuro-deportiva pediátrica es llevar al menor de edad con un alto rendimiento 
         deportivo a un control intensivo en las actividades en las cuales se desarrolla con el fin que desde su corta 
         edad mantenga un control adecuado en todos los sistemas tanto neurológico y/o locomotor con el fin que ninguno
          de estos sistemas al verse afectado sea un impedimento para explotar y crecer en su área deportiva.  
</div>
</div>

<div className= "Ramas">
<h> Keepin<strong>Move</strong>ment</h>
<div className= "Wrap">
<img className= "Bailar" src={Bailar} alt="Bailar" />
  <div className= "Overlap">
    <div className= "Image1">
    <img src={Sport} alt="Sport" className = "Info1"/>

    </div>
  </div>
</div>
<div className= "Wrap2">
<img className= "Trauma" src={Trauma} alt="Trauma" />
<div className= "Overlap2">
    <div className= "Image2">
    <img src={Neuro} alt="Neuro" className = "Info2"/>

    </div>
  </div>
</div>
<div> 
  <spam style= {{marginLeft: "11%"}}>Neurodeportiva</spam>
  <spam style= {{marginLeft: "13%"}}>Neurotraumatológica</spam>
</div>
</div>


<div className = "Section2">
<img className= "Dancer" src={Dancer} alt="Dancer" />
      <div className="container">
      <img src={Circle} alt="blue-circle" className= "blue-circle"/>
      <div><h2>Misión</h2>
      <p>
         Transformar el conocimiento profesional al beneficio de nuestros
         pacientes con un alta <strong>calidad asistencial,tecnología, 
           máximo profesionalismo, respeto y eficacia en el tratamiento
         </strong> prevención y seguimiento con protocolos especializados basados 
         en la historia clinica y en las necesidades individuales.
         </p>
<div></div>
</div>
</div>



<div className="container">
      <img src={Circle2} alt="pink-circle" className= "pink-circle"/>
      <div><h3>Visión</h3>
      <p2>
         Ser el <strong>centro de referencia en rehabilitación especializada,</strong> líder en buscar el continuo crecimiento asistencial,
         buscando distinguir en proporcionar una atención de calidad, servicio
         e integridad garantizada.
         </p2>

</div>
</div>
</div>

        <div className="Anounce">
          <div className= "box2">
          <img src={Rostros} alt="Rostros"/>
          <div className= "Conoce">
            Conoce a nuestro equipo de trabajo.
          </div>
          <a className="Click" >
            Haz click aquí
          </a>

        </div>
        </div>
      
    </div>
  )
}

export default Nosotros