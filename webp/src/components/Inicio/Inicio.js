import React from 'react';
import './Inicio.css';
import Guide from '../Navs/guide'
import clinics from '../clinics2.jpg'
import Nombre from '../Imagenes/Nombre.png'
import SingleLineGridList from './Slider.js'
import rehab from './Imagenes/rehab.jpg'
import Neurologic from './Imagenes/neurologic.jpg'
import Deportiv from './Imagenes/deportiv.jpg'
import Trauma from './Imagenes/trauma.png'
import Bailar from './Imagenes/bailar.png'
import Complete from './Imagenes/complete.jpg'
import Complete2 from './Imagenes/complete2.jpg'

var { SocialIcon } = require('react-social-icons');


const Inicio= () => {
  
  return (
    <div>
      <img src={Nombre} alt= "Nombre"  />
    <div className="Header">

      <Guide/>
      <img src={clinics} alt= "fondo"  />
      
      </div>
      <div className="Detalle">
      <div className="Inicio">
      <div className= "Imagen">
        <img src={rehab} alt= "Imagen"  />
        </div>
        </div>
        <div className= "Descripciones">
        <div className= "Descripcion">
          <div className= "texto">
        <h>Porque ser parte del desarrollo del jóven?</h>
        <p><strong>Casi una tercera parte de todas las lesiones que se producen en la infancia están relacionadas con
          los deportistas.</strong></p>
        <p>Nosotros somos un equipo especializado en el manejo de nuestros pacientes que presentan una discapacidad y o 
          lesión deportiva con el fin de lograr una recuperación eficiente en sus actividades de la vida diaria.</p>

         <p> Asimismo se busca trabajar en la prevención de lesiones y/o secuelas por lo que se realizan protocolos 
          especializados basados en la historia clínica y en las necesidades individuales de cada paciente.
 
</p>
</div>
<div className= "Socialbar"> 
<SocialIcon className="bar" url="https://www.facebook.com/clinicalmove/" />
<SocialIcon className="bar" url="https://www.instagram.com/clinical.move/" />
<SocialIcon className="bar" url="https://wa.me/528711454870" />
<SocialIcon className="bar" url="mailto:antoniodiazc@gmail.com" />
</div>
        </div>
        </div>
        
        </div>
      
        <div className="Galeria">
          <SingleLineGridList/>
        </div>

      <div className= "Comienzo">
      <img src={Complete} alt= "Comienzo"  />
      </div>

      <div className= "Comienzo2">
      <img src={Complete2} alt= "Comienzo2"  />
      </div>

        <div className= "Ramat">
        
<div class="responsive">
<div className= "gallery">
<img className= "Bailar" src={Bailar} alt="Bailar" />
<img className= "Deportiv" src={Deportiv} alt="Deportiv" />
<div class="desc">NeuroDeportivo</div>
  </div>
</div>


<div class="responsive">
<div className= "gallery">
<img className= "Trauma" src={Trauma} alt="Trauma" />
<img className= "Neurologic" src={Neurologic} alt="Neurologic"  />
<div class="desc">NeuroTraumatologico</div>
  </div>
</div>
</div>
</div>

        
      

  )
}

export default Inicio