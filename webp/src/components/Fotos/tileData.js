import cura from './imagenes/cura.jpg'
import conferencias from './imagenes/conferencias.jpg'
import eventos from './imagenes/eventos.jpg'
import mobilidad from './imagenes/movibilidad.jpg'
import pacientes from './imagenes/pacientes.jpg'
import Eventos from './Eventos/Eventos.js'
import Pacientes from './Pacientes/Pacientes.js'
import Informacion from './Informacion/Informacion.js'
import Conferencias from './Conferencias/Conferencias.js'
import Mobilidad from './Mobilidad/Mobilidad.js'

const tileData = [

    {
      img: eventos,
       title: 'Eventos',
       author: 'Presentes en todo momento durante el proceso ',
       gallery: Eventos

      },
    {
      img: conferencias,
       title: 'Conferencias',
       author: 'Seguimos preparandonos para dar un mejor servicio',
       gallery: Conferencias
    },
    {
      img: mobilidad,
       title: 'Movilidad',
       author: 'Para lograr un movimiento de calidad y elegancia hace falta trabajar detalles específicos y precisos',
       gallery: Mobilidad
      },
      {
        img: cura,
         title: 'Informacion que cura',
         author: 'Tu cuerpo escucha lo que tu mente dice',
         gallery: Informacion
        
      },
    {
      img: pacientes,
       title: 'Pacientes',
       author: 'Siempre buscando que nuestros pacientes sigan creciendo',
       gallery: Pacientes
       
    },
    
    ];

    export default tileData