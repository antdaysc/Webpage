import React from 'react';
import clinics2 from '../clinics2.jpg'
import './Servicios.css';
import instalaciones from './Imagenes/cita.jpg'
import instalaciones2 from './Imagenes/cita2.jpg'
import instalaciones3 from './Imagenes/cita3.jpg'
import instalaciones4 from './Imagenes/cita4.jpg'
import instalaciones5 from './Imagenes/cita5.jpg'


const Servicio= () => {
  return (
    <div className= "servicios">
    <div className="Header">
      <h1>Servicios</h1>
       <img src={clinics2} alt= "fondo" />
       </div>
       
      <div id= "articular" className="Detalle">
      <div className="Inicio">
      <div className= "Imagenes">
<img src={instalaciones}  alt= "cita"  />
</div>

  </div>
  <div  className= "Descripcion">
    <div className= "texto">
    <a ><h>Valoracion y análisis biomecánico y articular</h></a>
  <p><strong>La manipulación correctiva del movimiento aumenta
la calidad y la
cantidad de movimiento de una articulación.</strong></p>
  <p> La evaluación manual comparativa de la función articular, hecha por nuestro 
    equipo de trabajo experto, será la referencia actual para identificar su valor.</p>
<p>La elección de técnica o protocolo dependerá de los
 muchos factores que presenta el paciente, como el tipo de
 lesión, la gravedad, la cronicidad, los umbrales de dolor, la edad,
 las variables anatómicas y, a veces, simplemente el tamaño del
 paciente o incluso su debilidad.</p>
   
</div>
  </div>
      </div>
      <div className= "ims">
<img src={instalaciones}  alt= "cita"  />
</div>

      <div id= "lesiones" className="Detalle">
      <div className= "Imagenes">
<img src={instalaciones2}  alt= "cita2"  />
  </div>
  <div className= "Descripcion2">
    <div className= "texto">
    <a ><h>Prevención y manejo de lesiones</h></a>
  <p><strong>Las buenas prácticas y hábitos en el deporte son factores
    clave para lograr prevenir lesiones.</strong></p>
  <p>En Clinical move contamos con la experiencia para identificar de forma 
    temprana dónde puede desarrollarse una lesión y así aplicar protocolos para evitarlo.
  </p>
<p>El niño en desarrollo de crecimiento deportivo será
  mejor al poder explotar sus capacidades de aprendizaje, y así 
  adaptarse correctamente evitando lesiones a largo plazo.
  Nuestra clínica esta especializado en ellos. Queremos darles a 
  conocer la importancia del deportista joven.
</p>
   
</div>
  </div>
  
      </div>
      <div className= "ims">
<img src={instalaciones2}  alt= "cita2"  />
  </div>

      <div id= "deporte" className="Detalle">
      <div className= "Imagenes">
<img src={instalaciones3}  alt= "cita"  />
  </div>
  <div className= "Descripcion">
    <div className= "texto">
    <a ><h>Estudio del deporte</h></a>
  <p><strong>Especialisamos los protocolos para que sean efectivos
    para cualquier disciplina deportiva.</strong></p>
  <p> El nombre “movimiento clínico” está relacionado al
movimiento en su máximo detalle y su estudio al momento del
deporte. Un correcto manejo biomecánico que compone el
movimiento dará los movimientos correctos con todo lo que
en ello implica en el deporte dando buenos resultados a nivel
competitivo</p>
<p>La idea fue iniciar un enfoque desde una corta edad el cual
en la ciudad se ha dejado en segundo plano, sin darle la
importancia de lo que es la capacidad del niño de poder
explotar todas sus habilidades y agilidades al momento de
trabajarlas en un ámbito deportivo.</p>
   
</div>
  </div>
  
      </div>
      <div className= "ims">
<img src={instalaciones3}  alt= "cita"  />
  </div>
      <div id= "complementos" className="Detalle">
      <div className= "Imagenes">
<img src={instalaciones4}  alt= "cita2"  />
  </div>
  <div className= "Descripcion2">
    <div className= "texto">
    <a ><h>Desarrollo de complementos</h></a>
  <p><strong>Con una planificación adecuada, cada atleta obtendrá mejor rendimiento
    y evolución deportiva.</strong></p>
  <p> Existe una serie de métodos que ayudan a que el 
    deportista jóven vaya logrando una madurez física que demandan sus especialidades.</p>
<p>Los protocolos utilizados en cada atleta van de la mano de  complementos 
  que ayudarán a tener un movimiento más efectivo y consecuente un mejor desempeño.
  .</p>
  <p> El hecho de realizar un entrenamiento correcto y estructurado es un factor 
    importante que contribuyen al desarrollo del atleta.</p>
   
</div>
  </div>
  
      </div>
      <div className= "ims">
<img src={instalaciones4}  alt= "cita2"  />
  </div>

      <div id= "rendimiento" className="Detalle">
      <div className= "Imagenes">
<img src={instalaciones5}  alt= "cita"  />
  </div>
  <div className= "Descripcion">
    <div  className= "texto">
    <h>Técnicas para mejorar rendimiento</h>
  <p><strong>En el deporte son muchos factores que van a determinar nuestro éxito.</strong></p>
  <p>En el área deportiva, se lleva a un control de prevención y valoración encaminada
  a detectar anomalías estructurales o funcionales; que pueden derivar a una patología 
  o lesión que se verían agravadas con el esfuerzo y practica deportiva.</p>
  <p>Pero esto no termina aqui, en el proceso también se identifican areas de oportunidad
    que no necesariamente llevan a una lesión pero que afectan directamente al 
    rendimiento. Es por esto que de la mano del estudio del deporte, se incluyen técnicas 
    para el correcto funcionamiento y un mejor rendimiento.
  </p>
   
</div>
  </div>
  
      </div>
      <div className= "ims">
<img src={instalaciones5}  alt= "cita"  />
  </div>
    
     <div id='sensoroperceptual' className="Detalle">
      <div className= "Imagenes">
<img src={instalaciones}  alt= "cita2"  />
  </div>
  <div className= "Descripcion2">
    <div className= "texto">
  <h>Manejo Sensoroperceptual</h>
  <p><strong>Antes de llevar a la práctica una acción; debemos verla, sentir
    su ritmo, sus particularidades.</strong></p>
  <p> El manejo sensoroperceptual se refleja en cualquier proceso de  
    conocimiento que comienza por la percepción del fenómeno estudiado.
  </p>
<p>En Clinical move los sentidos son incorporados en los análisis y estudios
  de los fenómenos, para tener una representación completa y exacta; de esta manera se 
  desarrolla un proceso efectivo así como resultados con mayor rapidez.
</p>
   
</div>
  </div>
  
      </div>
      <div className= "ims">
<img src={instalaciones}  alt= "cita2"  />
  </div>
      
     
    </div>
    
  )
}

export default Servicio